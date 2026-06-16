/// <reference types="astro/client" />
// Premium tier logic — shared by all API routes.
//
// PREMIUM_ENABLED is the master switch. It now defaults ON — premium is live as
// soon as this code is deployed. To stage the code WITHOUT going live (e.g. push
// before Stripe is configured), set PREMIUM_ENABLED=false in the Vercel env; that
// makes gating inert (no feature locked, free limits for everyone, admins premium).
export const PREMIUM_ENABLED = import.meta.env.PREMIUM_ENABLED !== 'false';

// Free limits == the current production limits (do not change without intent —
// these are what every non-premium user gets today).
export const FREE_LIMITS = {
  coaching: 3,
  followup: 5,
  ask: 5,
  routineGenerate: 1,
  routineFinetune: 3,
  vodUploads: 10, // only enforced once PREMIUM_ENABLED is true
};

export const PREMIUM_LIMITS = {
  coaching: 10,
  followup: 25,
  ask: 20,
  routineGenerate: 3,
  routineFinetune: 10,
  vodUploads: Infinity,
};

export type Limits = typeof FREE_LIMITS;

export interface Subscription {
  tier?: string | null;
  status?: string | null;
  current_period_end?: string | null;
}

/** Is this subscription row currently entitling the user to premium? */
export function isPremiumActive(sub: Subscription | null | undefined): boolean {
  if (!sub) return false;
  if (sub.tier === 'lifetime') return true;
  if ((sub.tier === 'monthly' || sub.tier === 'yearly') && sub.status === 'active') {
    if (!sub.current_period_end) return true;
    return new Date(sub.current_period_end).getTime() > Date.now();
  }
  return false;
}

/**
 * Resolve a user's effective premium status. Admins are always premium (so you
 * can test gated features pre-launch). Requires a service-role Supabase client.
 */
export async function getPremium(
  sb: any,
  userId: string,
  isAdmin: boolean
): Promise<{ isPremium: boolean; tier: string }> {
  if (isAdmin) return { isPremium: true, tier: 'admin' };
  const { data } = await sb
    .from('subscriptions')
    .select('tier, status, current_period_end')
    .eq('user_id', userId)
    .maybeSingle();
  return { isPremium: isPremiumActive(data), tier: (data?.tier as string) || 'free' };
}

/** The daily/usage limits that apply to this user. */
export function getLimits(isPremium: boolean): Limits {
  return isPremium ? PREMIUM_LIMITS : FREE_LIMITS;
}

/**
 * Whether a premium-only feature (cross-note referencing, VOD playlists,
 * unlimited VOD uploads) should be blocked for this user. Inert until launch:
 * only returns true once PREMIUM_ENABLED is on AND the user isn't premium.
 */
export function featureLocked(isPremium: boolean): boolean {
  return PREMIUM_ENABLED && !isPremium;
}
