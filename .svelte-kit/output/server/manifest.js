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
		client: {start:"_app/immutable/entry/start.B8fJNGSy.js",app:"_app/immutable/entry/app.QNmS0ofL.js",imports:["_app/immutable/entry/start.B8fJNGSy.js","_app/immutable/chunks/BI92JrAA.js","_app/immutable/chunks/B1l0MKlZ.js","_app/immutable/chunks/7W2p-YFi.js","_app/immutable/entry/app.QNmS0ofL.js","_app/immutable/chunks/B1l0MKlZ.js","_app/immutable/chunks/Y3YpS1xu.js","_app/immutable/chunks/BxGJuC3A.js","_app/immutable/chunks/7W2p-YFi.js","_app/immutable/chunks/CKX80dIh.js","_app/immutable/chunks/CjD1QGXU.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/trailwrench/","/trailwrench/service"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
