

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/service/_page.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false
};
export const universal_id = "src/routes/service/+page.ts";
export const imports = ["_app/immutable/nodes/3.B_8D9knm.js","_app/immutable/chunks/BxGJuC3A.js","_app/immutable/chunks/B1l0MKlZ.js","_app/immutable/chunks/BoLS-Tqv.js","_app/immutable/chunks/7W2p-YFi.js","_app/immutable/chunks/Y3YpS1xu.js","_app/immutable/chunks/CKX80dIh.js","_app/immutable/chunks/CTXdU1Yo.js","_app/immutable/chunks/D6pQ28iH.js","_app/immutable/chunks/CjD1QGXU.js","_app/immutable/chunks/BI92JrAA.js"];
export const stylesheets = ["_app/immutable/assets/3.iJr1SmeP.css"];
export const fonts = [];
