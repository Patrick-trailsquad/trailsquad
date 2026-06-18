import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const DEPOSIT_AMOUNT_DKK = 5000;

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW = 60_000;

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
    const clientIp =
      req.headers.get("x-forwarded-for") ||
      req.headers.get("cf-connecting-ip") ||
      "unknown";
    if (isRateLimited(clientIp)) {
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 429,
        },
      );
    }

    const body = await req.json();
    const {
      destinationName,
      fullName,
      email,
      phone,
      preferredDistance,
      participants,
      accommodationPreference,
      returnPath,
    } = body;

    if (
      !email ||
      typeof email !== "string" ||
      email.length > 255 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      throw new Error("Valid email is required");
    }

    if (
      !fullName ||
      typeof fullName !== "string" ||
      fullName.length > 200 ||
      fullName.trim().length === 0
    ) {
      throw new Error("Valid name is required");
    }

    if (
      !destinationName ||
      typeof destinationName !== "string" ||
      destinationName.length > 200
    ) {
      throw new Error("Valid destination is required");
    }

    const sanitizedPhone = typeof phone === "string" ? phone.slice(0, 30) : "";
    const sanitizedDistance =
      typeof preferredDistance === "string" ? preferredDistance.slice(0, 50) : "";
    const sanitizedAccommodation =
      typeof accommodationPreference === "string"
        ? accommodationPreference.slice(0, 50)
        : "";

    const qty = Math.max(1, Math.min(Number(participants) || 1, 16));

    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2025-08-27.basil",
    });

    const customers = await stripe.customers.list({ email, limit: 1 });
    const customerId =
      customers.data.length > 0 ? customers.data[0].id : undefined;

    const origin =
      req.headers.get("origin") ||
      req.headers.get("referer")?.replace(/\/+$/, "") ||
      "https://trailsquad.lovable.app";

    const redirectBase =
      typeof returnPath === "string" && returnPath.startsWith("/")
        ? returnPath
        : "/";

    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_email: customerId ? undefined : email,
      line_items: [
        {
          price_data: {
            currency: "dkk",
            product_data: {
              name: "Trail Squad depositum",
              description: `Depositum for ${destinationName}`,
            },
            unit_amount: DEPOSIT_AMOUNT_DKK * 100,
          },
          quantity: qty,
        },
      ],
      mode: "payment",
      metadata: {
        destination: destinationName.slice(0, 200),
        full_name: fullName.trim().slice(0, 200),
        phone: sanitizedPhone,
        preferred_distance: sanitizedDistance,
        participants: String(qty),
        accommodation: sanitizedAccommodation,
        deposit_per_ticket_dkk: String(DEPOSIT_AMOUNT_DKK),
      },
      success_url: `${origin}${redirectBase}?payment=success`,
      cancel_url: `${origin}${redirectBase}?payment=cancelled`,
    });

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Error creating deposit checkout session:", message);
    return new Response(
      JSON.stringify({ error: "Failed to create checkout session" }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      },
    );
  }
});
