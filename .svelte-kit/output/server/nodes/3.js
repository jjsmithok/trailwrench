

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/service/_page.svelte.js')).default;
export const universal = {
  "prerender": false,
  "ssr": false,
  "csr": true
};
export const universal_id = "src/routes/service/+page.ts";
export const imports = ["_app/immutable/nodes/3.QyguQO7a.js","_app/immutable/chunks/DSxyfSFz.js","_app/immutable/chunks/CCyeKUuT.js","_app/immutable/chunks/VDP_-2_O.js","_app/immutable/chunks/BykkYhPv.js","_app/immutable/chunks/B8A5gff9.js","_app/immutable/chunks/2GmNc5oR.js","_app/immutable/chunks/a3g_of2G.js","_app/immutable/chunks/bOJ6D4Dn.js","_app/immutable/chunks/D95aenYx.js","_app/immutable/chunks/DAQZ88kZ.js"];
export const stylesheets = ["_app/immutable/assets/3.DSbLiSSy.css"];
export const fonts = [];
