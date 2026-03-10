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
		client: {start:"_app/immutable/entry/start.CJNzCxym.js",app:"_app/immutable/entry/app.B8OUTs50.js",imports:["_app/immutable/entry/start.CJNzCxym.js","_app/immutable/chunks/CevGX_Q7.js","_app/immutable/chunks/CszjB00M.js","_app/immutable/chunks/CMb0QoFy.js","_app/immutable/chunks/BZZFgi1n.js","_app/immutable/entry/app.B8OUTs50.js","_app/immutable/chunks/CszjB00M.js","_app/immutable/chunks/r42BzEDX.js","_app/immutable/chunks/BMaMP95z.js","_app/immutable/chunks/BZZFgi1n.js","_app/immutable/chunks/CRMS6Y7E.js","_app/immutable/chunks/DWu9HwXO.js","_app/immutable/chunks/CMb0QoFy.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
