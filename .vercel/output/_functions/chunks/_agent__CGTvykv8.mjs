import { c as createComponent } from './astro-component_B3c5JR_E.mjs';
import 'piccolore';
import { r as renderTemplate, o as renderComponent, m as maybeRenderHead, h as addAttribute } from './entrypoint_D87tld0u.mjs';
import { M as MAPS, A as AGENTS, c as agentVods, $ as $$BaseLayout, a as $$Nav, f as formatDate, b as $$Footer } from './data_pfxVzRdS.mjs';
import { createClient } from '@supabase/supabase-js';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
function getStaticPaths() {
  const paths = [];
  for (const map of MAPS) {
    for (const agent of AGENTS) {
      paths.push({ params: { map: map.id, agent: agent.id } });
    }
  }
  return paths;
}
const $$agent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$agent;
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
  const { map: mapId, agent: agentId } = Astro2.params;
  const mapData = MAPS.find((m) => m.id === mapId);
  const agentData = AGENTS.find((a) => a.id === agentId);
  if (!mapData || !agentData) return Astro2.redirect("/");
  const vods = agentVods(mapId, agentId);
  const title = `${agentData.name} ${mapData.name} VODs — FragLog.gg`;
  const description = `Watch ${vods.length} Radiant ${agentData.name} VODs on ${mapData.name}. Pro player POV gameplay on FragLog.gg`;
  return renderTemplate(_a || (_a = __template(["", ' <script>\n// Click to open YouTube\ndocument.addEventListener("click", function(e) {\n  const el = e.target.closest("[data-vid]");\n  if (el) window.open("https://youtube.com/watch?v=" + el.dataset.vid, "_blank");\n});\n\n// After auth loads, update notes/fav sections\nfunction onAuthChange() { updateVideoActions(); }\nfunction onNoteChange(videoId) {\n  const btn = document.querySelector(`.notes-btn[data-vid="${videoId}"]`);\n  if (btn) {\n    btn.classList.add("has-note");\n    btn.textContent = "📝 View notes";\n  }\n}\n\nfunction updateVideoActions() {\n  document.querySelectorAll(".notes-section").forEach(el => {\n    const vid = el.dataset.vid;\n    const title = el.dataset.title;\n    const player = el.dataset.player;\n    const adminNote = el.dataset.note;\n\n    if (currentUser) {\n      const noteText = getUserNote(vid) ? "View notes" : "Add notes";\n      const noteClass = getUserNote(vid) ? "has-note" : "";\n      const favText = isFav(vid) ? "♥ Saved" : "♡ Save";\n      const favClass = isFav(vid) ? "has-note" : "";\n      el.innerHTML = `\n        <button class="notes-btn ${noteClass}" data-vid="${vid}" onclick="openNotes(\'${vid}\',\'${title.replace(/\'/g,"\\\\\'")}\',\'${player}\'${adminNote ? `,\'${adminNote.replace(/\'/g,"\\\\\'")}\'\'` : \'\'})">\n          📝 ${noteText}\n        </button>\n        <button class="notes-btn ${favClass}" data-fav="${vid}" onclick="toggleFav(\'${vid}\',this)" title="Save to favorites">\n          ${favText}\n        </button>`;\n    } else {\n      el.innerHTML = `<span class="note-login-prompt"><span onclick="openAuth()" style="color:var(--red);cursor:pointer">Sign in</span> to save &amp; add notes</span>`;\n    }\n  });\n}\n<\/script>'], ["", ' <script>\n// Click to open YouTube\ndocument.addEventListener("click", function(e) {\n  const el = e.target.closest("[data-vid]");\n  if (el) window.open("https://youtube.com/watch?v=" + el.dataset.vid, "_blank");\n});\n\n// After auth loads, update notes/fav sections\nfunction onAuthChange() { updateVideoActions(); }\nfunction onNoteChange(videoId) {\n  const btn = document.querySelector(\\`.notes-btn[data-vid="\\${videoId}"]\\`);\n  if (btn) {\n    btn.classList.add("has-note");\n    btn.textContent = "📝 View notes";\n  }\n}\n\nfunction updateVideoActions() {\n  document.querySelectorAll(".notes-section").forEach(el => {\n    const vid = el.dataset.vid;\n    const title = el.dataset.title;\n    const player = el.dataset.player;\n    const adminNote = el.dataset.note;\n\n    if (currentUser) {\n      const noteText = getUserNote(vid) ? "View notes" : "Add notes";\n      const noteClass = getUserNote(vid) ? "has-note" : "";\n      const favText = isFav(vid) ? "♥ Saved" : "♡ Save";\n      const favClass = isFav(vid) ? "has-note" : "";\n      el.innerHTML = \\`\n        <button class="notes-btn \\${noteClass}" data-vid="\\${vid}" onclick="openNotes(\'\\${vid}\',\'\\${title.replace(/\'/g,"\\\\\\\\\'")}\',\'\\${player}\'\\${adminNote ? \\`,\'\\${adminNote.replace(/\'/g,"\\\\\\\\\'")}\'\'\\` : \'\'})">\n          📝 \\${noteText}\n        </button>\n        <button class="notes-btn \\${favClass}" data-fav="\\${vid}" onclick="toggleFav(\'\\${vid}\',this)" title="Save to favorites">\n          \\${favText}\n        </button>\\`;\n    } else {\n      el.innerHTML = \\`<span class="note-login-prompt"><span onclick="openAuth()" style="color:var(--red);cursor:pointer">Sign in</span> to save &amp; add notes</span>\\`;\n    }\n  });\n}\n<\/script>'])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "ogImage": mapData.img, "canonical": `https://fraglog.gg/${mapId}/${agentId}` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Nav", $$Nav, {})} ${maybeRenderHead()}<div class="page-content"> <div class="videos-header"> <div> <div class="hero-eyebrow">${mapData.name} · Radiant VODs</div> <div class="videos-title">${agentData.name}</div> </div> </div> ${vods.length === 0 ? renderTemplate`<div class="video-grid"> <div class="empty"> <strong>No VODs Yet</strong>
Check back soon.
</div> </div>` : renderTemplate`<div class="video-grid" id="video-grid"> ${vods.map((v) => renderTemplate`<div class="video-card"${addAttribute(`vc-${v.id}`, "id")}> <div class="video-thumb"${addAttribute(v.id, "data-vid")} style="cursor:pointer"> <img${addAttribute(`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`, "src")}${addAttribute(v.title, "alt")} loading="lazy"> <div class="play-overlay"> <div class="play-icon"><div class="play-tri"></div></div> </div> </div> <div class="video-info"> <div class="video-title"${addAttribute(v.id, "data-vid")} style="cursor:pointer">${v.title}</div> <div class="video-meta-row"> <span class="video-player">${v.player}</span> ${v.kd && renderTemplate`<span class="video-kd">${v.kd}</span>`} ${v.date && renderTemplate`<span class="video-date">${formatDate(v.date)}</span>`} </div> <div class="notes-section" style="margin-top:8px;padding-top:8px;border-top:1px solid var(--border);display:flex;gap:6px;align-items:center"${addAttribute(v.id, "data-vid")}${addAttribute(v.title, "data-title")}${addAttribute(v.player, "data-player")}${addAttribute(v.note || "", "data-note")}> <span class="note-login-prompt"><span onclick="openAuth()" style="color:var(--red);cursor:pointer">Sign in</span> to save &amp; add notes</span> </div> </div> </div>`)} </div>`} </div> ${renderComponent($$result2, "Footer", $$Footer, {})} ` }));
}, "C:/Users/g3hol/fraglog/src/pages/[map]/[agent].astro", void 0);

const $$file = "C:/Users/g3hol/fraglog/src/pages/[map]/[agent].astro";
const $$url = "/[map]/[agent]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$agent,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
