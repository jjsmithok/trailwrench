

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false
};
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.8Os-SPXB.js","_app/immutable/chunks/DSxyfSFz.js","_app/immutable/chunks/CCyeKUuT.js","_app/immutable/chunks/VDP_-2_O.js"];
export const stylesheets = ["_app/immutable/assets/0.DYQLJ1oy.css"];
export const fonts = [];
