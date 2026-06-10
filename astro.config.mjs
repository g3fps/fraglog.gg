import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import { VODS, getAllVods } from './src/data/data.js';

const MAPS = ['ascent', 'bind', 'haven', 'split', 'fracture', 'pearl', 'icebox', 'breeze', 'lotus', 'sunset', 'abyss', 'corrode'];
const AGENTS = ['jett', 'reyna', 'raze', 'neon', 'phoenix', 'yoru', 'iso', 'waylay', 'omen', 'viper', 'brimstone', 'astra', 'harbor', 'clove', 'miks', 'sage', 'cypher', 'killjoy', 'chamber', 'deadlock', 'vyse', 'veto', 'sova', 'breach', 'skye', 'kayo', 'fade', 'gekko', 'tejo'];

// Private / auth-only pages — excluded from sitemap
const EXCLUDED = ['/favorites', '/my-vods', '/settings', '/gameplan', '/notes'];

// /[map]/[agent] pages that have VODs
const vodPages = MAPS.flatMap(m =>
  AGENTS.filter(a => VODS[m]?.[a]?.length > 0)
        .map(a => `https://fraglog.gg/${m}/${a}/`)
);

// /agent/[agent] pages — one per agent that has any VOD
const agentsWithVods = AGENTS.filter(a => MAPS.some(m => VODS[m]?.[a]?.length > 0));
const agentPages = agentsWithVods.map(a => `https://fraglog.gg/agent/${a}/`);

// /player/[player] pages — one per unique player
const allVods = getAllVods();
const playerSlugs = [...new Set(allVods.map(v => v.player.toLowerCase().replace(/\//g, '').replace(/ /g, '-')))];
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
