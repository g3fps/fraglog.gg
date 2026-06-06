/// <reference types="astro/client" />
import type { SupabaseClient } from '@supabase/supabase-js';

/**
 * Serverless-safe rate limiting backed by Postgres.
 *
 * Relies on the `check_rate_limit(p_key, p_limit, p_window)` SQL function
 * (see the security setup notes / SECURITY_SETUP.md). The counting happens
 * atomically inside Postgres, so it works correctly across the many
 * short-lived serverless instances Vercel spins up — unlike an in-memory Map.
 *
 * Returns `true` when the request is ALLOWED, `false` when the limit is hit.
 * Fails OPEN: if the rate-limit infra errors, we allow the request rather
 * than take the whole site down. (Other gates — auth, daily caps — still apply.)
 */
export async function checkRateLimit(
  sb: SupabaseClient,
  key: string,
  limit: number,
  windowSeconds: number
): Promise<boolean> {
  try {
    const { data, error } = await sb.rpc('check_rate_limit', {
      p_key: key,
      p_limit: limit,
      p_window: windowSeconds,
    });
    if (error) return true; // fail open
    return data === true;
  } catch {
    return true; // fail open
  }
}

/**
 * Best-effort client IP. On Vercel the real client IP is the first entry of
 * x-forwarded-for; clientAddress (from the Astro context) is the fallback.
 */
export function getClientIp(request: Request, clientAddress?: string): string {
  const fwd = request.headers.get('x-forwarded-for');
  if (fwd) return fwd.split(',')[0].trim();
  return request.headers.get('x-real-ip') || clientAddress || 'unknown';
}
