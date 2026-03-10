export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "trailwrench/_app",
	assets: new Set(["favicon.svg","icon-192.svg","icon-512.svg","manifest.json","robots.txt"]),
	mimeTypes: {".svg":"image/svg+xml",".json":"application/json",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.CtWd9wbl.js",app:"_app/immutable/entry/app.9hZnLU5r.js",imports:["_app/immutable/entry/start.CtWd9wbl.js","_app/immutable/chunks/DtlqOHcK.js","_app/immutable/chunks/Dpp5mvPY.js","_app/immutable/chunks/DbN8WN9H.js","_app/immutable/chunks/ByVpEjbi.js","_app/immutable/entry/app.9hZnLU5r.js","_app/immutable/chunks/Dpp5mvPY.js","_app/immutable/chunks/B5PfHDAD.js","_app/immutable/chunks/Cu5s9iob.js","_app/immutable/chunks/ByVpEjbi.js","_app/immutable/chunks/BoVpln9g.js","_app/immutable/chunks/CO69yvnm.js","_app/immutable/chunks/DbN8WN9H.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
