/// <reference types="astro/client" />
import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { createClient } from '@supabase/supabase-js';
import { isAdminEmail } from '../../lib/admin.js';
import { MAPS, AGENTS } from '../../data/data.js';

export const prerender = false;

const DATA_PATH = resolve('src/data/data.js');
const MAP_IDS = new Set(MAPS.map((m: any) => m.id));
const AGENT_IDS = new Set(AGENTS.map((a: any) => a.id));

function readDataFile() {
  return readFileSync(DATA_PATH, 'utf-8');
}

function buildEntryLine(vod: { id: string; title: string; player: string; date?: string }) {
  // JSON.stringify safely escapes quotes/backslashes/newlines so nothing can break out of data.js
  let line = `      { id:${JSON.stringify(vod.id)}, title:${JSON.stringify(vod.title)}, player:${JSON.stringify(vod.player)}`;
  if (vod.date) line += `, date:${JSON.stringify(vod.date)}`;
  line += ` },`;
  return line;
}

async function verifyAdmin(accessToken: string) {
  const sb = createClient(
    'https://cvdtykmkajmhlxydhzzl.supabase.co',
    'sb_publishable_I16eAnYgsA9fd8ZMlmFQtA_RxepSaXi'
  );
  const { data: { user } } = await sb.auth.getUser(accessToken);
  return isAdminEmail(user?.email) ? user : null;
}

export async function GET({ request }: { request: Request }) {
  const auth = request.headers.get('Authorization')?.replace('Bearer ', '');
  if (!auth || !await verifyAdmin(auth)) {
    return new Response(JSON.stringify({ error: 'Forbidden' }), { status: 403 });
  }

  const content = readDataFile();
  const ids = [...content.matchAll(/id:"([a-zA-Z0-9_-]{11})"/g)].map(m => m[1]);
  const titles = [...content.matchAll(/title:"([^"]+)"/g)].map(m => m[1]);
  return new Response(JSON.stringify({ ids, titles }), { headers: { 'Content-Type': 'application/json' } });
}

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
  const date = raw.date ? String(raw.date).trim().slice(0, 20) : '';

  if (!map || !agent || !id || !title || !player) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
  }

  // ── Validate before anything touches the filesystem or a RegExp ──
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

  let content = readDataFile();

  // Duplicate check
  if (content.includes(`id:"${id}"`)) {
    return new Response(JSON.stringify({ error: 'Duplicate: video ID already exists in data.js' }), { status: 409 });
  }
  const titleLower = title.toLowerCase();
  const allTitles = [...content.matchAll(/title:"([^"]+)"/g)].map(m => m[1].toLowerCase());
  if (allTitles.includes(titleLower)) {
    return new Response(JSON.stringify({ error: 'Duplicate: title already exists in data.js' }), { status: 409 });
  }

  // Find the agent array within the correct map section.
  // map and agent are validated against known id sets above, so they are safe in a RegExp.
  const mapPattern = new RegExp(`  ${map}:\\s*\\{`);
  const mapMatch = mapPattern.exec(content);
  if (!mapMatch) {
    return new Response(JSON.stringify({ error: `Map "${map}" not found in data.js` }), { status: 404 });
  }

  const afterMap = content.indexOf(mapMatch[0]) + mapMatch[0].length;
  const agentPattern = new RegExp(`    ${agent}:\\s*\\[`);
  const agentSearchIn = content.slice(afterMap);
  const agentMatch = agentPattern.exec(agentSearchIn);
  if (!agentMatch) {
    return new Response(JSON.stringify({ error: `Agent "${agent}" not found under map "${map}"` }), { status: 404 });
  }

  const arrayOpenPos = afterMap + agentSearchIn.indexOf(agentMatch[0]) + agentMatch[0].length;

  const closingPattern = /\n    \],/;
  const afterArrayOpen = content.slice(arrayOpenPos);
  const closingMatch = closingPattern.exec(afterArrayOpen);
  if (!closingMatch) {
    return new Response(JSON.stringify({ error: 'Could not find array closing bracket' }), { status: 500 });
  }

  const insertPos = arrayOpenPos + closingMatch.index;
  const newLine = '\n' + buildEntryLine({ id, title, player, date });
  content = content.slice(0, insertPos) + newLine + content.slice(insertPos);

  writeFileSync(DATA_PATH, content, 'utf-8');

  return new Response(JSON.stringify({ success: true }), { headers: { 'Content-Type': 'application/json' } });
}
