import { c as createComponent } from './astro-component_B3c5JR_E.mjs';
import 'piccolore';
import { o as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_D87tld0u.mjs';
import { $ as $$BaseLayout, a as $$Nav, M as MAPS, v as vodCount, b as $$Footer } from './data_pfxVzRdS.mjs';
import { createClient } from '@supabase/supabase-js';

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
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Nav", $$Nav, { "crumbs": [], "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<div class="page-content" data-astro-cid-j7pv25f6> <div class="hero" data-astro-cid-j7pv25f6> <div class="hero-title" data-astro-cid-j7pv25f6>Study from the best<br data-astro-cid-j7pv25f6><span style="color:var(--red)" data-astro-cid-j7pv25f6>beat the rest</span></div> <div class="hero-sub" data-astro-cid-j7pv25f6>Radiant &amp; pro player gameplay — filtered by map and agent</div> </div> <div class="section-label" data-astro-cid-j7pv25f6>Select a map</div> <div class="map-grid" data-astro-cid-j7pv25f6> ${MAPS.map((map) => {
    const count = vodCount(map.id);
    return renderTemplate`<a${addAttribute(`map-card ${count > 0 ? "has-vods" : ""}`, "class")}${addAttribute(`/${map.id}`, "href")} data-astro-cid-j7pv25f6> <div class="map-card-accent" data-astro-cid-j7pv25f6></div> <img${addAttribute(map.img, "src")}${addAttribute(map.name, "alt")} loading="lazy" data-astro-cid-j7pv25f6> <div class="map-card-content" data-astro-cid-j7pv25f6> <div class="map-name" data-astro-cid-j7pv25f6>${map.name}</div> </div> </a>`;
  })} </div> </div> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} ` })}`;
}, "C:/Users/g3hol/fraglog/src/pages/index.astro", void 0);

const $$file = "C:/Users/g3hol/fraglog/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
