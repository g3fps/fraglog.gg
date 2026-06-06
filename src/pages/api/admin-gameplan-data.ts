/// <reference types="astro/client" />
import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';
import { getAdminEmails } from '../../lib/admin.js';

export const GET: APIRoute = async ({ request }) => {
  const authHeader = request.headers.get('authorization');
  const accessToken = authHeader?.replace('Bearer ', '').trim();

  const sb = createClient(
    'https://cvdtykmkajmhlxydhzzl.supabase.co',
    import.meta.env.SUPABASE_SERVICE_KEY
  );

  if (!accessToken) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  const { data: { user } } = await sb.auth.getUser(accessToken);
  if (!user?.email || !getAdminEmails().includes(user.email)) {
    return new Response(JSON.stringify({ error: 'Forbidden' }), { status: 403 });
  }

  const url = new URL(request.url);
  const offset = parseInt(url.searchParams.get('offset') || '0');
  const limit = Math.min(parseInt(url.searchParams.get('limit') || '20'), 50);

  const { data, error, count } = await sb
    .from('gameplan_training_data')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1);

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  return new Response(JSON.stringify({ data, count }), {
    headers: { 'Content-Type': 'application/json' },
  });
};
