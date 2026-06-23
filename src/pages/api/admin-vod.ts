/// <reference types="astro/client" />
import { createClient } from '@supabase/supabase-js';
import { isAdminEmail } from '../../lib/admin.js';
import { MAPS, AGENTS } from '../../data/data.js';

export const prerender = false;

const SUPABASE_URL = 'https://cvdtykmkajmhlxydhzzl.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_I16eAnYgsA9fd8ZMlmFQtA_RxepSaXi';

// summit is pre-approved in the allowlist before going public in MAPS
const MAP_IDS = new Set([...MAPS.map((m: any) => m.id), 'summit']);
const AGENT_IDS = new Set(AGENTS.map((a: any) => a.id));

function sbService() {
  return createClient(SUPABASE_URL, import.meta.env.SUPABASE_SERVICE_KEY);
}

async function verifyAdmin(accessToken: string) {
  const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  const { data: { user } } = await sb.auth.getUser(accessToken);
  return isAdminEmail(user?.email) ? user : null;
}

// GET — return existing IDs and titles for duplicate checking
export async function GET({ request }: { request: Request }) {
  const auth = request.headers.get('Authorization')?.replace('Bearer ', '');
  if (!auth || !await verifyAdmin(auth)) {
    return new Response(JSON.stringify({ error: 'Forbidden' }), { status: 403 });
  }

  const sb = sbService();
  const { data } = await sb.from('vods').select('id,title').limit(5000);
  const ids = (data || []).map((v: any) => v.id);
  const titles = (data || []).map((v: any) => v.title);
  return new Response(JSON.stringify({ ids, titles }), { headers: { 'Content-Type': 'application/json' } });
}

// POST — insert a new VOD
export async function POST({ request }: { request: Request }) {
  const auth = request.headers.get('Authorization')?.replace('Bearer ', '');
  if (!auth || !await verifyAdmin(auth)) {
    return new Response(JSON.stringify({ error: 'Forbidden' }), { status: 403 });
  }

  const raw = await request.json().catch(() => ({}));
  const id = String(raw.id || '').trim();
  const map = String(raw.map || '').trim().toLowerCase();
  const agent = String(raw.agent || '').trim().toLowerCase();
  const title = String(raw.title || '').trim().slice(0, 200);
  const player = String(raw.player || '').trim().slice(0, 100);
  const date = raw.date ? String(raw.date).trim().slice(0, 20) : null;

  if (!map || !agent || !id || !title || !player) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
  }
  if (!/^[a-zA-Z0-9_-]{11}$/.test(id)) {
    return new Response(JSON.stringify({ error: 'Invalid video ID' }), { status: 400 });
  }
  if (!MAP_IDS.has(map)) {
    return new Response(JSON.stringify({ error: `Unknown map "${map}"` }), { status: 400 });
  }
  if (!AGENT_IDS.has(agent)) {
    return new Response(JSON.stringify({ error: `Unknown agent "${agent}"` }), { status: 400 });
  }
  if (date && !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return new Response(JSON.stringify({ error: 'Invalid date' }), { status: 400 });
  }

  const sb = sbService();
  const { error } = await sb.from('vods').insert({
    id, map_id: map, agent_id: agent, title, player, date: date || null,
  });

  if (error?.code === '23505') {
    return new Response(JSON.stringify({ error: 'Duplicate: video ID already exists' }), { status: 409 });
  }
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  return new Response(JSON.stringify({ success: true }), { headers: { 'Content-Type': 'application/json' } });
}

// DELETE — remove a VOD by ID
export async function DELETE({ request }: { request: Request }) {
  const auth = request.headers.get('Authorization')?.replace('Bearer ', '');
  if (!auth || !await verifyAdmin(auth)) {
    return new Response(JSON.stringify({ error: 'Forbidden' }), { status: 403 });
  }

  const { id } = await request.json().catch(() => ({}));
  if (!id || !/^[a-zA-Z0-9_-]{11}$/.test(String(id))) {
    return new Response(JSON.stringify({ error: 'Invalid ID' }), { status: 400 });
  }

  const sb = sbService();
  const { error } = await sb.from('vods').delete().eq('id', id);
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  return new Response(JSON.stringify({ success: true }), { headers: { 'Content-Type': 'application/json' } });
}
