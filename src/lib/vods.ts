/// <reference types="astro/client" />
import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_ANON_KEY } from './auth.js';
import { MAPS, AGENTS } from '../data/data.js';

const mapNameById: Record<string, string> = Object.fromEntries(MAPS.map((m: any) => [m.id, m.name]));
const agentNameById: Record<string, string> = Object.fromEntries(AGENTS.map((a: any) => [a.id, a.name]));

function sb() {
  return createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

export interface Vod {
  id: string;
  title: string;
  player: string;
  date: string | null;
  mapId: string;
  agentId: string;
  mapName?: string;
  agentName?: string;
}

function mapRow(v: any): Vod {
  return {
    id: v.id,
    mapId: v.map_id,
    agentId: v.agent_id,
    title: v.title,
    player: v.player,
    date: v.date,
    mapName: mapNameById[v.map_id],
    agentName: agentNameById[v.agent_id],
  };
}

/** All curated VODs from the library. */
export async function getAllVods(): Promise<Vod[]> {
  const { data } = await sb()
    .from('vods')
    .select('id,map_id,agent_id,title,player,date')
    .order('date', { ascending: false })
    .limit(5000);
  return (data || []).map(mapRow);
}

/** VODs for a specific map + agent. */
export async function getAgentVods(mapId: string, agentId: string): Promise<Vod[]> {
  const { data } = await sb()
    .from('vods')
    .select('id,title,player,date')
    .eq('map_id', mapId)
    .eq('agent_id', agentId)
    .order('date', { ascending: false });
  return (data || []).map(v => ({ ...v, mapId, agentId }));
}

/** agent_id → count for a given map — one query instead of N. */
export async function getMapVodCounts(mapId: string): Promise<Record<string, number>> {
  const { data } = await sb()
    .from('vods')
    .select('agent_id')
    .eq('map_id', mapId);
  const counts: Record<string, number> = {};
  for (const row of (data || [])) {
    counts[row.agent_id] = (counts[row.agent_id] || 0) + 1;
  }
  return counts;
}

/** Total curated VOD count. */
export async function getTotalVodCount(): Promise<number> {
  const { count } = await sb()
    .from('vods')
    .select('*', { count: 'exact', head: true });
  return count || 0;
}

/** map_id → count across all maps — for the homepage map grid. */
export async function getAllMapVodCounts(): Promise<Record<string, number>> {
  const { data } = await sb()
    .from('vods')
    .select('map_id');
  const counts: Record<string, number> = {};
  for (const row of (data || [])) {
    counts[row.map_id] = (counts[row.map_id] || 0) + 1;
  }
  return counts;
}

/** Most recent VODs by date. */
export async function getRecentVods(limit: number): Promise<Vod[]> {
  const { data } = await sb()
    .from('vods')
    .select('id,map_id,agent_id,title,player,date')
    .order('date', { ascending: false })
    .limit(limit);
  return (data || []).map(mapRow);
}
