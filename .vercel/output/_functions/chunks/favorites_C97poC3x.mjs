import { c as createComponent } from './astro-component_B3c5JR_E.mjs';
import 'piccolore';
import { r as renderTemplate, n as defineScriptVars, o as renderComponent, m as maybeRenderHead } from './entrypoint_D87tld0u.mjs';
import { g as getAllVods, $ as $$BaseLayout, a as $$Nav, b as $$Footer } from './data_pfxVzRdS.mjs';
import { createClient } from '@supabase/supabase-js';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Favorites = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Favorites;
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
  const allVods = getAllVods();
  return renderTemplate(_a || (_a = __template(["", " <script>(function(){", `
const ALL_VODS = allVods;

function onAuthChange() { renderFavorites(); }
function onFavChange() { renderFavorites(); }

function renderFavorites() {
  const container = document.getElementById("fav-container");

  if (typeof currentUser === 'undefined' || !currentUser) {
    container.innerHTML = '<div class="video-grid"><div class="empty"><strong>Not signed in</strong>Sign in to see your saved VODs</div></div>';
    return;
  }

  const favIds = userFavorites;
  if (!favIds.length) {
    container.innerHTML = '<div class="video-grid"><div class="empty"><strong>No favorites yet</strong>Hit the ♥ on any video to save it here</div></div>';
    return;
  }

  const found = ALL_VODS.filter(v => favIds.includes(v.id));

  if (!found.length) {
    container.innerHTML = '<div class="video-grid"><div class="empty"><strong>No favorites found</strong>Some saved videos may have been removed</div></div>';
    return;
  }

  container.innerHTML = \`<div class="video-grid" style="grid-template-columns:repeat(auto-fill,minmax(220px,1fr))">\${found.map(v => \`
    <div class="video-card" id="vc-\${v.id}">
      <div class="video-thumb" data-vid="\${v.id}" style="cursor:pointer">
        <img src="https://img.youtube.com/vi/\${v.id}/mqdefault.jpg" alt="\${v.title}" loading="lazy">
        <div class="play-overlay"><div class="play-icon"><div class="play-tri"></div></div></div>
      </div>
      <button class="fav-btn active" onclick="toggleFav('\${v.id}',this)" title="Remove from favorites">♥</button>
      <div class="video-info">
        <div class="video-tag-row">
          <span class="video-map-tag">\${v.mapName}</span>
          <span class="video-agent-tag">\${v.agentName}</span>
        </div>
        <div class="video-title" data-vid="\${v.id}" style="cursor:pointer">\${v.title}</div>
        <div class="video-meta-row">
          <span class="video-player">\${v.player}</span>
          \${v.date ? \`<span class="video-date">\${new Date(v.date).toLocaleDateString('en-US',{month:'short',year:'numeric'})}</span>\` : ''}
        </div>
        <div style="margin-top:8px;padding-top:8px;border-top:1px solid var(--border)">
          <button class="notes-btn \${getUserNote(v.id)?'has-note':''}" onclick="openNotes('\${v.id}','\${v.title.replace(/'/g,"\\\\'")}','\${v.player}')">
            📝 \${getUserNote(v.id) ? 'View notes' : 'Add notes'}
          </button>
        </div>
      </div>
    </div>
  \`).join("")}</div>\`;

  container.onclick = e => {
    const el = e.target.closest("[data-vid]");
    if (el && !e.target.closest("button")) window.open("https://youtube.com/watch?v=" + el.dataset.vid, "_blank");
  };
}

// Run after auth loads
document.addEventListener("DOMContentLoaded", () => {
  // Poll for auth readiness
  let tries = 0;
  const poll = setInterval(() => {
    if (typeof currentUser !== 'undefined') {
      clearInterval(poll);
      renderFavorites();
    }
    if (++tries > 50) clearInterval(poll);
  }, 100);
});
})();<\/script>`], ["", " <script>(function(){", `
const ALL_VODS = allVods;

function onAuthChange() { renderFavorites(); }
function onFavChange() { renderFavorites(); }

function renderFavorites() {
  const container = document.getElementById("fav-container");

  if (typeof currentUser === 'undefined' || !currentUser) {
    container.innerHTML = '<div class="video-grid"><div class="empty"><strong>Not signed in</strong>Sign in to see your saved VODs</div></div>';
    return;
  }

  const favIds = userFavorites;
  if (!favIds.length) {
    container.innerHTML = '<div class="video-grid"><div class="empty"><strong>No favorites yet</strong>Hit the ♥ on any video to save it here</div></div>';
    return;
  }

  const found = ALL_VODS.filter(v => favIds.includes(v.id));

  if (!found.length) {
    container.innerHTML = '<div class="video-grid"><div class="empty"><strong>No favorites found</strong>Some saved videos may have been removed</div></div>';
    return;
  }

  container.innerHTML = \\\`<div class="video-grid" style="grid-template-columns:repeat(auto-fill,minmax(220px,1fr))">\\\${found.map(v => \\\`
    <div class="video-card" id="vc-\\\${v.id}">
      <div class="video-thumb" data-vid="\\\${v.id}" style="cursor:pointer">
        <img src="https://img.youtube.com/vi/\\\${v.id}/mqdefault.jpg" alt="\\\${v.title}" loading="lazy">
        <div class="play-overlay"><div class="play-icon"><div class="play-tri"></div></div></div>
      </div>
      <button class="fav-btn active" onclick="toggleFav('\\\${v.id}',this)" title="Remove from favorites">♥</button>
      <div class="video-info">
        <div class="video-tag-row">
          <span class="video-map-tag">\\\${v.mapName}</span>
          <span class="video-agent-tag">\\\${v.agentName}</span>
        </div>
        <div class="video-title" data-vid="\\\${v.id}" style="cursor:pointer">\\\${v.title}</div>
        <div class="video-meta-row">
          <span class="video-player">\\\${v.player}</span>
          \\\${v.date ? \\\`<span class="video-date">\\\${new Date(v.date).toLocaleDateString('en-US',{month:'short',year:'numeric'})}</span>\\\` : ''}
        </div>
        <div style="margin-top:8px;padding-top:8px;border-top:1px solid var(--border)">
          <button class="notes-btn \\\${getUserNote(v.id)?'has-note':''}" onclick="openNotes('\\\${v.id}','\\\${v.title.replace(/'/g,"\\\\\\\\'")}','\\\${v.player}')">
            📝 \\\${getUserNote(v.id) ? 'View notes' : 'Add notes'}
          </button>
        </div>
      </div>
    </div>
  \\\`).join("")}</div>\\\`;

  container.onclick = e => {
    const el = e.target.closest("[data-vid]");
    if (el && !e.target.closest("button")) window.open("https://youtube.com/watch?v=" + el.dataset.vid, "_blank");
  };
}

// Run after auth loads
document.addEventListener("DOMContentLoaded", () => {
  // Poll for auth readiness
  let tries = 0;
  const poll = setInterval(() => {
    if (typeof currentUser !== 'undefined') {
      clearInterval(poll);
      renderFavorites();
    }
    if (++tries > 50) clearInterval(poll);
  }, 100);
});
})();<\/script>`])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Favorites — FragLog.gg", "description": "Your saved Valorant VODs on FragLog.gg" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Nav", $$Nav, { "crumbs": [{ label: "ALL MAPS", href: "/" }, { label: "FAVORITES" }] })} ${maybeRenderHead()}<div class="page-content"> <div class="hero"> <div class="hero-eyebrow">Your Collection</div> <div class="hero-title">Favorites</div> <div class="hero-sub">VODs you've saved for later study</div> </div> <div id="fav-container"> <div class="video-grid"> <div class="empty"><strong>Loading...</strong></div> </div> </div> </div> ${renderComponent($$result2, "Footer", $$Footer, {})} ` }), defineScriptVars({ allVods }));
}, "C:/Users/g3hol/fraglog/src/pages/favorites.astro", void 0);

const $$file = "C:/Users/g3hol/fraglog/src/pages/favorites.astro";
const $$url = "/favorites";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Favorites,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
