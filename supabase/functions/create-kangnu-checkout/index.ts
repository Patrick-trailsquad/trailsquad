import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const PRICE_MAP: Record<string, string> = {
  "hhe-economy": "price_1T1ncgA7DrFBs7AarGLoSJl2",
  "soma-standard": "price_1T1nd5A7DrFBs7AaMtJuOm2B",
  "soma-superior": "price_1T1ndyA7DrFBs7AaOU21nmPs",
};

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5; // max requests
const RATE_WINDOW = 60_000; // per minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Basic rate limiting by IP
    const clientIp = req.headers.get("x-forwarded-for") || req.headers.get("cf-connecting-ip") || "unknown";
    if (isRateLimited(clientIp)) {
      return new Response(JSON.stringify({ error: "Too many requests. Please try again later." }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 429,
      });
    }

    const body = await req.json();
    const { accommodationPreference, fullName, email, phone, preferredDistance, participants } = body;

    // Validate accommodation preference
    if (!accommodationPreference || typeof accommodationPreference !== 'string' || !PRICE_MAP[accommodationPreference]) {
      throw new Error("Invalid accommodation preference");
    }

    // Validate email
    if (!email || typeof email !== 'string' || email.length > 255 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error("Valid email is required");
    }

    // Validate name
    if (!fullName || typeof fullName !== 'string' || fullName.length > 200 || fullName.trim().length === 0) {
      throw new Error("Valid name is required");
    }

    // Sanitize optional fields
    const sanitizedPhone = typeof phone === 'string' ? phone.slice(0, 30) : "";
    const sanitizedDistance = typeof preferredDistance === 'string' ? preferredDistance.slice(0, 50) : "";

    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2025-08-27.basil",
    });

    const priceId = PRICE_MAP[accommodationPreference];
    const qty = Math.max(1, Math.min(Number(participants) || 1, 16));

    const customers = await stripe.customers.list({ email, limit: 1 });
    let customerId: string | undefined;
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
    }

    // Validate origin header
    const origin = req.headers.get("origin");
    if (!origin) {
      throw new Error("Missing origin header");
    }

    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_email: customerId ? undefined : email,
      line_items: [{ price: priceId, quantity: qty }],
      mode: "payment",
      metadata: {
        destination: "KangNu Running Race",
        full_name: fullName.trim().slice(0, 200),
        phone: sanitizedPhone,
        preferred_distance: sanitizedDistance,
        participants: String(qty),
        accommodation: accommodationPreference,
      },
      success_url: `${origin}/destinations/kangnu26?payment=success`,
      cancel_url: `${origin}/destinations/kangnu26?payment=cancelled`,
    });

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Error creating checkout session:", message);
    return new Response(JSON.stringify({ error: "Failed to create checkout session" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
