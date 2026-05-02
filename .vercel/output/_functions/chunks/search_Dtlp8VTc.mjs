import { c as createComponent } from './astro-component_B3c5JR_E.mjs';
import 'piccolore';
import { r as renderTemplate, n as defineScriptVars, o as renderComponent, m as maybeRenderHead } from './entrypoint_D87tld0u.mjs';
import { g as getAllVods, $ as $$BaseLayout, a as $$Nav, b as $$Footer } from './data_pfxVzRdS.mjs';
import { createClient } from '@supabase/supabase-js';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Search;
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

function runSearch(query) {
  const q = query.toLowerCase().trim();
  if (!q) {
    document.getElementById("search-title").textContent = "Results";
    document.getElementById("search-sub").textContent = "";
    document.getElementById("search-grid").innerHTML = '<div class="empty"><strong>Start typing</strong>Search above to find VODs</div>';
    return;
  }

  const results = ALL_VODS.filter(v => {
    const s = [v.title, v.player, v.mapName, v.agentName].join(" ").toLowerCase();
    return s.includes(q);
  });

  document.getElementById("search-title").textContent = results.length + " result" + (results.length !== 1 ? "s" : "");
  document.getElementById("search-sub").textContent = results.length ? \`Showing results for "\${query}"\` : \`No results for "\${query}"\`;

  const grid = document.getElementById("search-grid");
  if (!results.length) {
    grid.innerHTML = '<div class="empty"><strong>No results</strong>Try a different player, map, or agent</div>';
    return;
  }

  grid.innerHTML = results.map(v => \`
    <div class="video-card">
      <div class="video-thumb" data-vid="\${v.id}" style="cursor:pointer">
        <img src="https://img.youtube.com/vi/\${v.id}/mqdefault.jpg" alt="\${v.title}" loading="lazy">
        <div class="play-overlay"><div class="play-icon"><div class="play-tri"></div></div></div>
      </div>
      <div class="video-info">
        <div class="video-tag-row">
          <span class="video-map-tag">\${v.mapName||''}</span>
          <span class="video-agent-tag">\${v.agentName||''}</span>
        </div>
        <div class="video-title" data-vid="\${v.id}" style="cursor:pointer">\${v.title}</div>
        <div class="video-meta-row">
          <span class="video-player">\${v.player}</span>
          \${v.date ? \`<span class="video-date">\${new Date(v.date).toLocaleDateString('en-US',{month:'short',year:'numeric'})}</span>\` : ''}
        </div>
        <div class="notes-section" style="margin-top:8px;padding-top:8px;border-top:1px solid var(--border);display:flex;gap:6px;align-items:center" data-vid="\${v.id}" data-title="\${v.title.replace(/"/g,'&quot;')}" data-player="\${v.player}">
          <span class="note-login-prompt"><span onclick="openAuth()" style="color:var(--red);cursor:pointer">Sign in</span> to save &amp; add notes</span>
        </div>
      </div>
    </div>
  \`).join("");

  grid.onclick = e => {
    const el = e.target.closest("[data-vid]");
    if (el) window.open("https://youtube.com/watch?v=" + el.dataset.vid, "_blank");
  };

  updateSearchActions();
}

function updateSearchActions() {
  if (typeof currentUser === 'undefined' || !currentUser) return;
  document.querySelectorAll("#search-grid .notes-section").forEach(el => {
    const vid = el.dataset.vid;
    const title = el.dataset.title;
    const player = el.dataset.player;
    const noteText = getUserNote(vid) ? "View notes" : "Add notes";
    const noteClass = getUserNote(vid) ? "has-note" : "";
    const favText = isFav(vid) ? "♥ Saved" : "♡ Save";
    const favClass = isFav(vid) ? "has-note" : "";
    el.innerHTML = \`
      <button class="notes-btn \${noteClass}" onclick="openNotes('\${vid}','\${title.replace(/'/g,"\\\\'")}','\${player}')">📝 \${noteText}</button>
      <button class="notes-btn \${favClass}" onclick="toggleFav('\${vid}',this)"> \${favText}</button>\`;
  });
}

function onAuthChange() { updateSearchActions(); }

// Read query from URL on load
const params = new URLSearchParams(window.location.search);
const q = params.get("q");
if (q) {
  document.getElementById("nav-search").value = q;
  runSearch(q);
}

// Handle nav search input on this page (override to search in place)
document.getElementById("nav-search").oninput = function(e) {
  const val = e.target.value;
  const url = val.trim() ? '/search?q=' + encodeURIComponent(val.trim()) : '/search';
  history.replaceState({}, '', url);
  runSearch(val);
};
})();<\/script>`], ["", " <script>(function(){", `
const ALL_VODS = allVods;

function runSearch(query) {
  const q = query.toLowerCase().trim();
  if (!q) {
    document.getElementById("search-title").textContent = "Results";
    document.getElementById("search-sub").textContent = "";
    document.getElementById("search-grid").innerHTML = '<div class="empty"><strong>Start typing</strong>Search above to find VODs</div>';
    return;
  }

  const results = ALL_VODS.filter(v => {
    const s = [v.title, v.player, v.mapName, v.agentName].join(" ").toLowerCase();
    return s.includes(q);
  });

  document.getElementById("search-title").textContent = results.length + " result" + (results.length !== 1 ? "s" : "");
  document.getElementById("search-sub").textContent = results.length ? \\\`Showing results for "\\\${query}"\\\` : \\\`No results for "\\\${query}"\\\`;

  const grid = document.getElementById("search-grid");
  if (!results.length) {
    grid.innerHTML = '<div class="empty"><strong>No results</strong>Try a different player, map, or agent</div>';
    return;
  }

  grid.innerHTML = results.map(v => \\\`
    <div class="video-card">
      <div class="video-thumb" data-vid="\\\${v.id}" style="cursor:pointer">
        <img src="https://img.youtube.com/vi/\\\${v.id}/mqdefault.jpg" alt="\\\${v.title}" loading="lazy">
        <div class="play-overlay"><div class="play-icon"><div class="play-tri"></div></div></div>
      </div>
      <div class="video-info">
        <div class="video-tag-row">
          <span class="video-map-tag">\\\${v.mapName||''}</span>
          <span class="video-agent-tag">\\\${v.agentName||''}</span>
        </div>
        <div class="video-title" data-vid="\\\${v.id}" style="cursor:pointer">\\\${v.title}</div>
        <div class="video-meta-row">
          <span class="video-player">\\\${v.player}</span>
          \\\${v.date ? \\\`<span class="video-date">\\\${new Date(v.date).toLocaleDateString('en-US',{month:'short',year:'numeric'})}</span>\\\` : ''}
        </div>
        <div class="notes-section" style="margin-top:8px;padding-top:8px;border-top:1px solid var(--border);display:flex;gap:6px;align-items:center" data-vid="\\\${v.id}" data-title="\\\${v.title.replace(/"/g,'&quot;')}" data-player="\\\${v.player}">
          <span class="note-login-prompt"><span onclick="openAuth()" style="color:var(--red);cursor:pointer">Sign in</span> to save &amp; add notes</span>
        </div>
      </div>
    </div>
  \\\`).join("");

  grid.onclick = e => {
    const el = e.target.closest("[data-vid]");
    if (el) window.open("https://youtube.com/watch?v=" + el.dataset.vid, "_blank");
  };

  updateSearchActions();
}

function updateSearchActions() {
  if (typeof currentUser === 'undefined' || !currentUser) return;
  document.querySelectorAll("#search-grid .notes-section").forEach(el => {
    const vid = el.dataset.vid;
    const title = el.dataset.title;
    const player = el.dataset.player;
    const noteText = getUserNote(vid) ? "View notes" : "Add notes";
    const noteClass = getUserNote(vid) ? "has-note" : "";
    const favText = isFav(vid) ? "♥ Saved" : "♡ Save";
    const favClass = isFav(vid) ? "has-note" : "";
    el.innerHTML = \\\`
      <button class="notes-btn \\\${noteClass}" onclick="openNotes('\\\${vid}','\\\${title.replace(/'/g,"\\\\\\\\'")}','\\\${player}')">📝 \\\${noteText}</button>
      <button class="notes-btn \\\${favClass}" onclick="toggleFav('\\\${vid}',this)"> \\\${favText}</button>\\\`;
  });
}

function onAuthChange() { updateSearchActions(); }

// Read query from URL on load
const params = new URLSearchParams(window.location.search);
const q = params.get("q");
if (q) {
  document.getElementById("nav-search").value = q;
  runSearch(q);
}

// Handle nav search input on this page (override to search in place)
document.getElementById("nav-search").oninput = function(e) {
  const val = e.target.value;
  const url = val.trim() ? '/search?q=' + encodeURIComponent(val.trim()) : '/search';
  history.replaceState({}, '', url);
  runSearch(val);
};
})();<\/script>`])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Search — FragLog.gg", "description": "Search Valorant VODs by player, map, or agent on FragLog.gg" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Nav", $$Nav, { "crumbs": [{ label: "ALL MAPS", href: "/" }, { label: "SEARCH" }] })} ${maybeRenderHead()}<div class="page-content"> <div class="hero" style="margin-bottom:1.5rem;padding-bottom:1.5rem"> <div class="hero-eyebrow">Search Results</div> <div class="videos-title" id="search-title">Results</div> <div class="hero-sub" id="search-sub"></div> </div> <div class="video-grid" id="search-grid"> <div class="empty"><strong>Start typing</strong>Search above to find VODs</div> </div> </div> ${renderComponent($$result2, "Footer", $$Footer, {})} ` }), defineScriptVars({ allVods }));
}, "C:/Users/g3hol/fraglog/src/pages/search.astro", void 0);

const $$file = "C:/Users/g3hol/fraglog/src/pages/search.astro";
const $$url = "/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
