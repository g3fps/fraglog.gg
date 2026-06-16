/// <reference types="astro/client" />
import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import type { AstroCookies } from 'astro';
import { isPremiumActive } from './premium.js';

// Public Supabase project config (publishable key is safe to ship to the client).
export const SUPABASE_URL = 'https://cvdtykmkajmhlxydhzzl.supabase.co';
export const SUPABASE_ANON_KEY = 'sb_publishable_I16eAnYgsA9fd8ZMlmFQtA_RxepSaXi';

/** Anonymous Supabase client (publishable key). */
export function sbAnon(): SupabaseClient {
  return createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

/**
 * Resolve the logged-in user from the SSR auth cookies.
 * Returns the user (or null) plus the session-bound client, so callers that need
 * to run further server-side queries under the user's RLS can reuse it.
 */
export async function getSessionUser(cookies: AstroCookies): Promise<{ user: any; sb: SupabaseClient }> {
  const sb = sbAnon();
  const access = cookies.get('sb-access-token')?.value;
  const refresh = cookies.get('sb-refresh-token')?.value;
  let user = null;
  if (access && refresh) {
    const { data } = await sb.auth.setSession({ access_token: access, refresh_token: refresh });
    user = data.user ?? null;
  }
  return { user, sb };
}

/** getSessionUser + premium status resolved from the subscriptions table. */
export async function getSessionPremium(cookies: AstroCookies): Promise<{ user: any; isPremium: boolean; sb: SupabaseClient }> {
  const { user, sb } = await getSessionUser(cookies);
  let isPremium = false;
  if (user) {
    const { data: sub } = await sb.from('subscriptions').select('tier, status, current_period_end').eq('user_id', user.id).maybeSingle();
    isPremium = isPremiumActive(sub);
  }
  return { user, isPremium, sb };
}
