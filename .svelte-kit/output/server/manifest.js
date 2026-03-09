export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.svg","icon-192.svg","icon-512.svg","manifest.json","robots.txt"]),
	mimeTypes: {".svg":"image/svg+xml",".json":"application/json",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.3lWgZpWt.js",app:"_app/immutable/entry/app.CK9G3SIk.js",imports:["_app/immutable/entry/start.3lWgZpWt.js","_app/immutable/chunks/ex5-JpY0.js","_app/immutable/chunks/qYgAWgle.js","_app/immutable/chunks/_tE6obZ3.js","_app/immutable/chunks/DOKlEXlX.js","_app/immutable/entry/app.CK9G3SIk.js","_app/immutable/chunks/qYgAWgle.js","_app/immutable/chunks/Q4AlozVA.js","_app/immutable/chunks/C_NvWtst.js","_app/immutable/chunks/DOKlEXlX.js","_app/immutable/chunks/CixMHp53.js","_app/immutable/chunks/Cr9EBSKj.js","_app/immutable/chunks/_tE6obZ3.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/service"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
