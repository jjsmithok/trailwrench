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
		client: {start:"_app/immutable/entry/start.Bn9cWttx.js",app:"_app/immutable/entry/app.D6PmtQP8.js",imports:["_app/immutable/entry/start.Bn9cWttx.js","_app/immutable/chunks/DYuczv_H.js","_app/immutable/chunks/qYgAWgle.js","_app/immutable/chunks/_tE6obZ3.js","_app/immutable/chunks/DOKlEXlX.js","_app/immutable/entry/app.D6PmtQP8.js","_app/immutable/chunks/qYgAWgle.js","_app/immutable/chunks/Q4AlozVA.js","_app/immutable/chunks/C_NvWtst.js","_app/immutable/chunks/DOKlEXlX.js","_app/immutable/chunks/CixMHp53.js","_app/immutable/chunks/Cr9EBSKj.js","_app/immutable/chunks/_tE6obZ3.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/service",
				pattern: /^\/service\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
