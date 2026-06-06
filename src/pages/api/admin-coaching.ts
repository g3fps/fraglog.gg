/// <reference types="astro/client" />
import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';
import { isAdminEmail } from '../../lib/admin.js';

export const DELETE: APIRoute = async ({ request }) => {
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
  if (!isAdminEmail(user?.email)) {
    return new Response(JSON.stringify({ error: 'Forbidden' }), { status: 403 });
  }

  const url = new URL(request.url);
  const id = url.searchParams.get('id');
  if (!id) {
    return new Response(JSON.stringify({ error: 'Missing id' }), { status: 400 });
  }

  const { error } = await sb.from('coaching_training_data').delete().eq('id', id);
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  return new Response(JSON.stringify({ ok: true }), { headers: { 'Content-Type': 'application/json' } });
};

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
  if (!isAdminEmail(user?.email)) {
    return new Response(JSON.stringify({ error: 'Forbidden' }), { status: 403 });
  }

  const url = new URL(request.url);
  const filter = url.searchParams.get('filter') || 'all'; // 'all' | 'shared'
  const agentFilter = url.searchParams.get('agent') || '';
  const modeFilter = url.searchParams.get('mode') || '';
  const offset = parseInt(url.searchParams.get('offset') || '0');
  const limit = 25;

  let query = sb
    .from('coaching_training_data')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1);

  if (filter === 'shared') query = query.eq('share_coaching', true);
  if (agentFilter) query = query.eq('agent', agentFilter);
  if (modeFilter) query = query.eq('mode', modeFilter);

  const { data, error, count } = await query;

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  return new Response(JSON.stringify({ data, count }), {
    headers: { 'Content-Type': 'application/json' }
  });
};
