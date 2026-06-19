/// <reference types="astro/client" />
import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';

export const POST: APIRoute = async ({ request }) => {
  const authHeader = request.headers.get('authorization');
  const accessToken = authHeader?.replace('Bearer ', '').trim();

  if (!accessToken) {
    return new Response(JSON.stringify({ error: 'Unauthorized.' }), { status: 401 });
  }

  const sb = createClient(
    'https://cvdtykmkajmhlxydhzzl.supabase.co',
    import.meta.env.SUPABASE_SERVICE_KEY
  );

  const { data: { user }, error: userErr } = await sb.auth.getUser(accessToken);
  if (userErr || !user) {
    return new Response(JSON.stringify({ error: 'Unauthorized.' }), { status: 401 });
  }

  const uid = user.id;

  // Delete all user data across every table (order avoids any FK issues)
  const tables = [
    'vod_marks',
    'favorites',
    'watched',
    'user_vods',
    'notes',
    'coaching_training_data',
    'goals',
    'routine',
    'notebook',
    'general_chat',
    'playlists',
    'subscriptions',
    'profiles',
  ];

  for (const table of tables) {
    const col = table === 'profiles' ? 'id' : 'user_id';
    const { error } = await sb.from(table).delete().eq(col, uid);
    if (error) {
      console.error(`delete-account: failed on ${table}:`, error.message);
      // Non-fatal — continue so we still delete the auth user
    }
  }

  // Delete avatar from storage (best-effort)
  try {
    const { data: files } = await sb.storage.from('avatars').list(uid);
    if (files?.length) {
      await sb.storage.from('avatars').remove(files.map(f => `${uid}/${f.name}`));
    }
  } catch {}

  // Delete the auth user — this is the point of no return
  const { error: deleteErr } = await sb.auth.admin.deleteUser(uid);
  if (deleteErr) {
    return new Response(JSON.stringify({ error: 'Failed to delete account. Please contact support@fraglog.gg.' }), { status: 500 });
  }

  return new Response(JSON.stringify({ ok: true }), { headers: { 'Content-Type': 'application/json' } });
};
