import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://cvdtykmkajmhlxydhzzl.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_I16eAnYgsA9fd8ZMlmFQtA_RxepSaXi';

const MAPS = ['ascent', 'bind', 'haven', 'split', 'fracture', 'pearl', 'icebox', 'breeze', 'lotus', 'sunset', 'abyss', 'corrode'];

const EXCLUDED = ['/favorites', '/my-vods', '/settings', '/gameplan', '/notes'];

const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
const { data: vods } = await sb.from('vods').select('map_id,agent_id,player');

const vodSet = new Set((vods || []).map(v => `${v.map_id}/${v.agent_id}`));
const vodPages = [...vodSet]
  .filter(k => MAPS.includes(k.split('/')[0]))
  .map(k => `https://fraglog.gg/${k}/`);

const agentsWithVods = [...new Set((vods || []).map(v => v.agent_id))];
const agentPages = agentsWithVods.map(a => `https://fraglog.gg/agent/${a}/`);

const playerSlugs = [...new Set((vods || []).map(v =>
  v.player.toLowerCase().replace(/\//g, '').replace(/ /g, '-')
))];
const playerPages = playerSlugs.map(p => `https://fraglog.gg/player/${p}/`);

const customPages = [
  ...MAPS.map(m => `https://fraglog.gg/${m}/`),
  ...vodPages,
  ...agentPages,
  ...playerPages,
];

export default defineConfig({
  site: 'https://fraglog.gg',
  output: 'server',
  adapter: vercel(),

  vite: {
    ssr: {
      noExternal: ['@supabase/supabase-js'],
    },
  },

  integrations: [
    sitemap({
      filter: (page) => !EXCLUDED.some(path => new URL(page).pathname.startsWith(path)),
      customPages,
    })
  ],
});
