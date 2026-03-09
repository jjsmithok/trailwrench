

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false
};
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.CfY3EVur.js","_app/immutable/chunks/C_NvWtst.js","_app/immutable/chunks/qYgAWgle.js","_app/immutable/chunks/rEneL9nJ.js"];
export const stylesheets = ["_app/immutable/assets/0.DsjVYsrz.css"];
export const fonts = [];
