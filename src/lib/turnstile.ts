/// <reference types="astro/client" />

/**
 * Server-side verification of a Cloudflare Turnstile token.
 *
 * Fails CLOSED in production when the token is missing/invalid. If the secret
 * isn't configured yet, it allows requests only in dev (so local testing isn't
 * blocked before TURNSTILE_SECRET_KEY is set) and fails closed in production.
 */
export async function verifyTurnstile(token: unknown, ip?: string): Promise<boolean> {
  const secret = import.meta.env.TURNSTILE_SECRET_KEY;
  if (!secret) return !!import.meta.env.DEV; // not configured: allow in dev, block in prod
  if (typeof token !== 'string' || !token) return false;

  try {
    const form = new URLSearchParams();
    form.append('secret', secret);
    form.append('response', token);
    if (ip && ip !== 'unknown') form.append('remoteip', ip);

    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: form,
    });
    if (!res.ok) return false;
    const data = await res.json();
    return data.success === true;
  } catch {
    return false;
  }
}
