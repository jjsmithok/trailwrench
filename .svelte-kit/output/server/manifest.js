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
		client: {start:"_app/immutable/entry/start.Ccea8-9_.js",app:"_app/immutable/entry/app.3f5OCsRT.js",imports:["_app/immutable/entry/start.Ccea8-9_.js","_app/immutable/chunks/DAQZ88kZ.js","_app/immutable/chunks/CCyeKUuT.js","_app/immutable/chunks/BykkYhPv.js","_app/immutable/entry/app.3f5OCsRT.js","_app/immutable/chunks/CCyeKUuT.js","_app/immutable/chunks/B8A5gff9.js","_app/immutable/chunks/DSxyfSFz.js","_app/immutable/chunks/BykkYhPv.js","_app/immutable/chunks/2GmNc5oR.js","_app/immutable/chunks/D95aenYx.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/3.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/service",
				pattern: /^\/service\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set(["/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
