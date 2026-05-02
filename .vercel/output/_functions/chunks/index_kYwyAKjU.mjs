import { c as createComponent } from './astro-component_B3c5JR_E.mjs';
import 'piccolore';
import { r as renderTemplate, o as renderComponent, m as maybeRenderHead, h as addAttribute } from './entrypoint_D87tld0u.mjs';
import { M as MAPS, $ as $$BaseLayout, a as $$Nav, R as ROLES_ORDER, A as AGENTS, d as ROLE_DOTS, c as agentVods, b as $$Footer } from './data_pfxVzRdS.mjs';
import { createClient } from '@supabase/supabase-js';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
function getStaticPaths() {
  return MAPS.map((map) => ({ params: { map: map.id } }));
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const supabase = createClient(
    "https://cvdtykmkajmhlxydhzzl.supabase.co",
    "sb_publishable_I16eAnYgsA9fd8ZMlmFQtA_RxepSaXi"
  );
  const accessToken = Astro2.cookies.get("sb-access-token")?.value;
  const refreshToken = Astro2.cookies.get("sb-refresh-token")?.value;
  if (accessToken && refreshToken) {
    const { data } = await supabase.auth.setSession({ access_token: accessToken, refresh_token: refreshToken });
    data.session?.user ?? null;
  }
  const { map: mapId } = Astro2.params;
  const mapData = MAPS.find((m) => m.id === mapId);
  if (!mapData) return Astro2.redirect("/");
  const title = `${mapData.name} VODs — FragLog.gg`;
  const description = `Browse Radiant and pro player ${mapData.name} VODs by agent on FragLog.gg`;
  return renderTemplate(_a || (_a = __template(["", '  <script>\n// Load agent portraits from Valorant API\nasync function loadAgentPortraits() {\n  try {\n    const res = await fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true");\n    const data = await res.json();\n    data.data.forEach(apiAgent => {\n      const name = apiAgent.displayName.toLowerCase().replace("/","").replace(" ","");\n      const el = document.getElementById("portrait-" + name);\n      if (el && apiAgent.fullPortrait) {\n        const wrap = el.parentElement;\n        const img = document.createElement("img");\n        img.className = "agent-portrait-img";\n        img.src = apiAgent.fullPortrait;\n        img.alt = apiAgent.displayName;\n        wrap.replaceChild(img, el);\n\n        // Apply gradient color to card\n        const colors = apiAgent.backgroundGradientColors;\n        if (colors && colors[0]) {\n          const card = wrap.closest(".agent-card");\n          if (card) card.style.setProperty("--agent-color", "#" + colors[0].slice(0,6));\n        }\n      }\n    });\n  } catch(e) {\n    console.warn("Could not load agent portraits", e);\n  }\n}\nloadAgentPortraits();\n<\/script>'])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "ogImage": mapData.img, "canonical": `https://fraglog.gg/${mapId}`, "data-astro-cid-mfhrobzo": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="map-bg-layer"${addAttribute(`background-image:url(${mapData.img});opacity:1`, "style")} data-astro-cid-mfhrobzo></div> <div class="agents-bg-overlay" data-astro-cid-mfhrobzo></div> ${renderComponent($$result2, "Nav", $$Nav, { "crumbs": [{ label: "ALL MAPS", href: "/" }, { label: mapData.name.toUpperCase() }], "data-astro-cid-mfhrobzo": true })} <div class="page-content" style="position:relative;z-index:2" data-astro-cid-mfhrobzo> <div class="agents-page-title" data-astro-cid-mfhrobzo>${mapData.name}</div> ${ROLES_ORDER.map((role) => {
    const roleAgents = AGENTS.filter((a) => a.role === role);
    return renderTemplate`<div class="agent-section" data-astro-cid-mfhrobzo> <div class="role-header" data-astro-cid-mfhrobzo>
style=${`background:${ROLE_DOTS[role]}`} ${role}s
</div> <div class="agent-grid" data-astro-cid-mfhrobzo> ${roleAgents.map((agent) => {
      const vods = agentVods(mapId, agent.id);
      const hasVods = vods.length > 0;
      return renderTemplate`<a${addAttribute(`agent-card ${hasVods ? "has-vods" : "no-vods"}`, "class")}${addAttribute(hasVods ? `/${mapId}/${agent.id}` : void 0, "href")}${addAttribute(agent.id, "data-agent")}${addAttribute(agent.name, "data-name")} data-astro-cid-mfhrobzo> <div class="agent-portrait-wrap" data-astro-cid-mfhrobzo> <div class="agent-icon-placeholder"${addAttribute(`portrait-${agent.id}`, "id")} data-astro-cid-mfhrobzo>${agent.name[0]}</div> <div class="agent-portrait-overlay" data-astro-cid-mfhrobzo></div> </div> <div class="agent-card-info" data-astro-cid-mfhrobzo> <div class="agent-name" data-astro-cid-mfhrobzo>${agent.name}</div> </div> </a>`;
    })} </div> </div>`;
  })} </div> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-mfhrobzo": true })} ` }));
}, "C:/Users/g3hol/fraglog/src/pages/[map]/index.astro", void 0);

const $$file = "C:/Users/g3hol/fraglog/src/pages/[map]/index.astro";
const $$url = "/[map]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
