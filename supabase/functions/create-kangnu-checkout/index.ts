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

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { accommodationPreference, fullName, email, phone, preferredDistance, participants } = await req.json();

    if (!accommodationPreference || !PRICE_MAP[accommodationPreference]) {
      throw new Error("Invalid accommodation preference");
    }
    if (!email || !fullName) {
      throw new Error("Name and email are required");
    }

    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2025-08-27.basil",
    });

    const priceId = PRICE_MAP[accommodationPreference];

    // Check for existing Stripe customer
    const customers = await stripe.customers.list({ email, limit: 1 });
    let customerId: string | undefined;
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
    }

    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_email: customerId ? undefined : email,
      line_items: [{ price: priceId, quantity: 1 }],
      mode: "payment",
      metadata: {
        destination: "KangNu Running Race",
        full_name: fullName,
        phone: phone || "",
        preferred_distance: preferredDistance || "",
        participants: String(participants || 1),
        accommodation: accommodationPreference,
      },
      success_url: `${req.headers.get("origin")}/destinations/kangnu26?payment=success`,
      cancel_url: `${req.headers.get("origin")}/destinations/kangnu26?payment=cancelled`,
    });

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Error creating checkout session:", message);
    return new Response(JSON.stringify({ error: message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
