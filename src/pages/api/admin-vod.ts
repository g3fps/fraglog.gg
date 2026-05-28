import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { createClient } from '@supabase/supabase-js';

export const prerender = false;

const DATA_PATH = resolve('src/data/data.js');

function readDataFile() {
  return readFileSync(DATA_PATH, 'utf-8');
}

function buildEntryLine(vod: { id: string; title: string; player: string; kd?: string; date?: string }) {
  let line = `      { id:"${vod.id}", title:"${vod.title}", player:"${vod.player}"`;
  if (vod.kd) line += `, kd:"${vod.kd}"`;
  if (vod.date) line += `, date:"${vod.date}"`;
  line += ` },`;
  return line;
}

async function verifyAdmin(accessToken: string) {
  const sb = createClient(
    'https://cvdtykmkajmhlxydhzzl.supabase.co',
    'sb_publishable_I16eAnYgsA9fd8ZMlmFQtA_RxepSaXi'
  );
  const { data: { user } } = await sb.auth.getUser(accessToken);
  return user;
}

export async function GET({ request }: { request: Request }) {
  const auth = request.headers.get('Authorization')?.replace('Bearer ', '');
  if (!auth || !await verifyAdmin(auth)) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  const content = readDataFile();
  const ids = [...content.matchAll(/id:"([a-zA-Z0-9_-]{11})"/g)].map(m => m[1]);
  const titles = [...content.matchAll(/title:"([^"]+)"/g)].map(m => m[1].toLowerCase());
  return new Response(JSON.stringify({ ids, titles }), { headers: { 'Content-Type': 'application/json' } });
}

export async function POST({ request }: { request: Request }) {
  const auth = request.headers.get('Authorization')?.replace('Bearer ', '');
  if (!auth || !await verifyAdmin(auth)) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  const { map, agent, id, title, player, kd, date } = await request.json();
  if (!map || !agent || !id || !title || !player) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
  }

  let content = readDataFile();

  // Duplicate check
  if (content.includes(`id:"${id}"`)) {
    return new Response(JSON.stringify({ error: 'Duplicate: video ID already exists in data.js' }), { status: 409 });
  }
  if (content.includes(`title:"${title}"`)) {
    return new Response(JSON.stringify({ error: 'Duplicate: title already exists in data.js' }), { status: 409 });
  }

  // Find the agent array within the correct map section.
  // Pattern: find "  map: {" then within that block find "    agent: ["
  // then insert the new entry just before the closing "    ],"
  const mapKey = map.toLowerCase();
  const agentKey = agent.toLowerCase();

  // Find the map block start
  const mapPattern = new RegExp(`  ${mapKey}:\\s*\\{`);
  const mapMatch = mapPattern.exec(content);
  if (!mapMatch) {
    return new Response(JSON.stringify({ error: `Map "${mapKey}" not found in data.js` }), { status: 404 });
  }

  // From the map block, find the agent array
  const afterMap = content.indexOf(mapMatch[0]) + mapMatch[0].length;
  const agentPattern = new RegExp(`    ${agentKey}:\\s*\\[`);
  const agentSearchIn = content.slice(afterMap);
  const agentMatch = agentPattern.exec(agentSearchIn);
  if (!agentMatch) {
    return new Response(JSON.stringify({ error: `Agent "${agentKey}" not found under map "${mapKey}"` }), { status: 404 });
  }

  // Position of the opening [ of the agent array in the full content
  const arrayOpenPos = afterMap + agentSearchIn.indexOf(agentMatch[0]) + agentMatch[0].length;

  // Find the closing ],  — search forward from arrayOpenPos
  const closingPattern = /\n    \],/;
  const afterArrayOpen = content.slice(arrayOpenPos);
  const closingMatch = closingPattern.exec(afterArrayOpen);
  if (!closingMatch) {
    return new Response(JSON.stringify({ error: 'Could not find array closing bracket' }), { status: 500 });
  }

  const insertPos = arrayOpenPos + closingMatch.index;
  const newLine = '\n' + buildEntryLine({ id, title, player, kd, date });
  content = content.slice(0, insertPos) + newLine + content.slice(insertPos);

  writeFileSync(DATA_PATH, content, 'utf-8');

  return new Response(JSON.stringify({ success: true }), { headers: { 'Content-Type': 'application/json' } });
}
