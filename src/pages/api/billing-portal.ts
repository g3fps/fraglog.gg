/// <reference types="astro/client" />
import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';
import Stripe from 'stripe';

// Opens the Stripe customer portal so a user can manage / cancel their subscription.
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

  const accessToken = request.headers.get('authorization')?.replace('Bearer ', '').trim();
  let userId: string | null = null;
  if (accessToken) {
    try {
      const { data: { user } } = await sb.auth.getUser(accessToken);
      userId = user?.id || null;
    } catch {}
  }
  if (!userId) {
    return new Response(JSON.stringify({ error: 'Sign in to manage billing.' }), { status: 401 });
  }

  const { data } = await sb
    .from('subscriptions')
    .select('stripe_customer_id')
    .eq('user_id', userId)
    .maybeSingle();

  if (!data?.stripe_customer_id) {
    return new Response(JSON.stringify({ error: 'No billing account found.' }), { status: 400 });
  }

  const origin = new URL(request.url).origin;
  const session = await stripe.billingPortal.sessions.create({
    customer: data.stripe_customer_id,
    return_url: `${origin}/settings`,
  });

  return new Response(JSON.stringify({ url: session.url }), { status: 200 });
};
