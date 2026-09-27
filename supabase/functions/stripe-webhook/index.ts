import Stripe from "https://esm.sh/stripe@18.5.0";
import { createClient } from "npm:@supabase/supabase-js@2";

const ZAPIER_WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/21931910/2qey8br/";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
  apiVersion: "2025-08-27.basil",
});
const cryptoProvider = Stripe.createSubtleCryptoProvider();

Deno.serve(async (req) => {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });

  const signature = req.headers.get("stripe-signature");
  const secret = Deno.env.get("STRIPE_WEBHOOK_SECRET");
  if (!signature || !secret) return new Response("Missing signature", { status: 400 });

  const body = await req.text();
  let event: Stripe.Event;
  try {
    event = await stripe.webhooks.constructEventAsync(body, signature, secret, undefined, cryptoProvider);
  } catch (err) {
    console.error("Signature verification failed:", (err as Error).message);
    return new Response("Invalid signature", { status: 400 });
  }

  if (event.type !== "checkout.session.completed") {
    return new Response(JSON.stringify({ received: true }), { status: 200 });
  }

  const session = event.data.object as Stripe.Checkout.Session;
  if (session.payment_status !== "paid") {
    return new Response(JSON.stringify({ received: true, skipped: "not paid" }), { status: 200 });
  }

  const m = session.metadata || {};
  const email = session.customer_details?.email || session.customer_email || m.email || "";
  const fullName = m.full_name || session.customer_details?.name || "";
  const phone = m.phone || session.customer_details?.phone || "";
  const participants = Number(m.participants || 1);
  const destination = m.destination || "Ukendt";

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  const { error: dbError } = await supabase.from("quote_requests").insert({
    destination,
    full_name: fullName,
    email,
    phone,
    preferred_distance: m.preferred_distance || "",
    participants,
    accommodation_preference: m.accommodation || "",
    source: "stripe_webhook",
    payment_status: "success",
  });
  if (dbError) console.error("DB insert error:", dbError.message);

  try {
    const res = await fetch(ZAPIER_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        destination,
        fullName,
        email,
        phone,
        preferredDistance: m.preferred_distance || "",
        participants,
        accommodationPreference: m.accommodation || "",
        amount_paid_dkk: (session.amount_total || 0) / 100,
        stripe_session_id: session.id,
        source: "stripe_deposit",
        payment_status: "success",
        submitted_at: new Date((session.created || Date.now() / 1000) * 1000).toISOString(),
        triggered_from: "stripe_webhook",
      }),
    });
    if (!res.ok) console.error("Zapier responded", res.status);
  } catch (err) {
    console.error("Zapier error:", (err as Error).message);
  }

  return new Response(JSON.stringify({ received: true }), { status: 200 });
});
