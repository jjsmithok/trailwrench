

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/service/_page.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false
};
export const universal_id = "src/routes/service/+page.ts";
export const imports = ["_app/immutable/nodes/3.Dyp3u-zr.js","_app/immutable/chunks/BMaMP95z.js","_app/immutable/chunks/CszjB00M.js","_app/immutable/chunks/OHdIbXP-.js","_app/immutable/chunks/BZZFgi1n.js","_app/immutable/chunks/r42BzEDX.js","_app/immutable/chunks/CRMS6Y7E.js","_app/immutable/chunks/BSlrzmwt.js","_app/immutable/chunks/BIX46_Ir.js","_app/immutable/chunks/DWu9HwXO.js","_app/immutable/chunks/CMb0QoFy.js","_app/immutable/chunks/DJC8mwt_.js"];
export const stylesheets = ["_app/immutable/assets/3.iJr1SmeP.css"];
export const fonts = [];
