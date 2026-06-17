/// <reference types="astro/client" />
import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';
import Stripe from 'stripe';

const PRICE_IDS: Record<string, string | undefined> = {
  monthly: import.meta.env.STRIPE_PRICE_MONTHLY,
  yearly: import.meta.env.STRIPE_PRICE_YEARLY,
  lifetime: import.meta.env.STRIPE_PRICE_LIFETIME,
};

export const POST: APIRoute = async ({ request }) => {
  const stripeKey = import.meta.env.STRIPE_SECRET_KEY;
  if (!stripeKey) {
    return new Response(JSON.stringify({ error: 'Billing is not configured yet.' }), { status: 503 });
  }
  const stripe = new Stripe(stripeKey);

  const sb = createClient(
    'https://cvdtykmkajmhlxydhzzl.supabase.co',
    import.meta.env.SUPABASE_SERVICE_KEY
  );

  // Verify the user server-side
  const accessToken = request.headers.get('authorization')?.replace('Bearer ', '').trim();
  let userId: string | null = null;
  let email: string | null = null;
  if (accessToken) {
    try {
      const { data: { user } } = await sb.auth.getUser(accessToken);
      userId = user?.id || null;
      email = user?.email || null;
    } catch {}
  }
  if (!userId) {
    return new Response(JSON.stringify({ error: 'Sign in to upgrade.' }), { status: 401 });
  }

  const body = await request.json().catch(() => ({}));
  const plan = String(body.plan || '');
  const priceId = PRICE_IDS[plan];
  if (!priceId) {
    return new Response(JSON.stringify({ error: 'Unknown plan, or that plan is not configured.' }), { status: 400 });
  }

  // Reuse the customer if this user already has one
  const { data: existing } = await sb
    .from('subscriptions')
    .select('stripe_customer_id')
    .eq('user_id', userId)
    .maybeSingle();

  let customerId = existing?.stripe_customer_id as string | undefined;
  if (!customerId) {
    const customer = await stripe.customers.create({
      email: email || undefined,
      metadata: { user_id: userId },
    });
    customerId = customer.id;
    await sb.from('subscriptions').upsert(
      { user_id: userId, stripe_customer_id: customerId, updated_at: new Date().toISOString() },
      { onConflict: 'user_id' }
    );
  }

  const origin = new URL(request.url).origin;
  const mode: 'payment' | 'subscription' = plan === 'lifetime' ? 'payment' : 'subscription';

  const session = await stripe.checkout.sessions.create({
    mode,
    customer: customerId,
    line_items: [{ price: priceId, quantity: 1 }],
    client_reference_id: userId,
    metadata: { user_id: userId, tier: plan },
    // Carry user_id onto the subscription so later subscription.* events resolve it
    ...(mode === 'subscription'
      ? { subscription_data: { metadata: { user_id: userId, tier: plan } } }
      : {}),
    // EU withdrawal waiver: records consent to immediate access at checkout
    consent_collection: { terms_of_service: 'required' },
    custom_text: {
      terms_of_service_acceptance: {
        message: 'I agree to the [Terms of Service](https://fraglog.gg/terms) and [Refund Policy](https://fraglog.gg/refund), and consent to immediate access to Premium — waiving my 14-day EU/UK right of withdrawal.',
      },
    },
    allow_promotion_codes: true,
    success_url: `${origin}/premium?status=success`,
    cancel_url: `${origin}/premium?status=cancel`,
  });

  return new Response(JSON.stringify({ url: session.url }), { status: 200 });
};
