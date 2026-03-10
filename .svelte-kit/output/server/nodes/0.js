

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false
};
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.DBVhGVVC.js","_app/immutable/chunks/BxGJuC3A.js","_app/immutable/chunks/B1l0MKlZ.js","_app/immutable/chunks/BoLS-Tqv.js"];
export const stylesheets = ["_app/immutable/assets/0.DsjVYsrz.css"];
export const fonts = [];
