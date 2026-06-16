/// <reference types="astro/client" />
import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';
import Stripe from 'stripe';

// Stripe moved current_period_end onto subscription items in newer API versions;
// read defensively so this works regardless of the pinned version.
function periodEnd(sub: any): string | null {
  const ts = sub?.current_period_end ?? sub?.items?.data?.[0]?.current_period_end;
  return ts ? new Date(ts * 1000).toISOString() : null;
}

export const POST: APIRoute = async ({ request }) => {
  const stripeKey = import.meta.env.STRIPE_SECRET_KEY;
  const webhookSecret = import.meta.env.STRIPE_WEBHOOK_SECRET;
  if (!stripeKey || !webhookSecret) {
    return new Response('Billing not configured', { status: 503 });
  }
  const stripe = new Stripe(stripeKey);

  const sig = request.headers.get('stripe-signature') || '';
  const rawBody = await request.text();
  let event: Stripe.Event;
  try {
    event = await stripe.webhooks.constructEventAsync(rawBody, sig, webhookSecret);
  } catch (err: any) {
    return new Response(`Webhook signature verification failed: ${err.message}`, { status: 400 });
  }

  const sb = createClient(
    'https://cvdtykmkajmhlxydhzzl.supabase.co',
    import.meta.env.SUPABASE_SERVICE_KEY
  );

  // Update by Stripe customer id (for subscription.* events that lack our user_id)
  async function updateByCustomer(customerId: string, fields: Record<string, any>) {
    const { data } = await sb
      .from('subscriptions')
      .select('user_id')
      .eq('stripe_customer_id', customerId)
      .maybeSingle();
    if (!data?.user_id) return;
    await sb
      .from('subscriptions')
      .update({ ...fields, updated_at: new Date().toISOString() })
      .eq('user_id', data.user_id);
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const s = event.data.object as Stripe.Checkout.Session;
        const userId = s.client_reference_id || (s.metadata?.user_id as string | undefined);
        const customerId = s.customer as string;
        if (!userId) break;

        if (s.mode === 'payment') {
          // Lifetime one-time purchase
          await sb.from('subscriptions').upsert(
            {
              user_id: userId,
              stripe_customer_id: customerId,
              tier: 'lifetime',
              status: 'active',
              current_period_end: null,
              updated_at: new Date().toISOString(),
            },
            { onConflict: 'user_id' }
          );
        } else {
          const subId = s.subscription as string;
          const sub = await stripe.subscriptions.retrieve(subId);
          await sb.from('subscriptions').upsert(
            {
              user_id: userId,
              stripe_customer_id: customerId,
              stripe_subscription_id: subId,
              tier: (s.metadata?.tier as string) || 'monthly',
              status: sub.status,
              current_period_end: periodEnd(sub),
              updated_at: new Date().toISOString(),
            },
            { onConflict: 'user_id' }
          );
        }
        break;
      }

      case 'customer.subscription.updated':
      case 'customer.subscription.deleted': {
        const sub = event.data.object as Stripe.Subscription;
        await updateByCustomer(sub.customer as string, {
          stripe_subscription_id: sub.id,
          status: event.type === 'customer.subscription.deleted' ? 'canceled' : sub.status,
          current_period_end: periodEnd(sub),
        });
        break;
      }

      case 'invoice.paid': {
        const inv = event.data.object as any;
        if (inv.subscription) {
          const sub = await stripe.subscriptions.retrieve(inv.subscription as string);
          await updateByCustomer(inv.customer as string, {
            status: sub.status,
            current_period_end: periodEnd(sub),
          });
        }
        break;
      }
    }
  } catch (err: any) {
    return new Response(`Webhook handler error: ${err.message}`, { status: 500 });
  }

  return new Response(JSON.stringify({ received: true }), { status: 200 });
};
