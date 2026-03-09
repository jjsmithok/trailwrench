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
		client: {start:"_app/immutable/entry/start.C-4L8vIv.js",app:"_app/immutable/entry/app.CJf-D-7h.js",imports:["_app/immutable/entry/start.C-4L8vIv.js","_app/immutable/chunks/VWhVtCb1.js","_app/immutable/chunks/qYgAWgle.js","_app/immutable/chunks/_tE6obZ3.js","_app/immutable/chunks/DOKlEXlX.js","_app/immutable/entry/app.CJf-D-7h.js","_app/immutable/chunks/qYgAWgle.js","_app/immutable/chunks/Q4AlozVA.js","_app/immutable/chunks/C_NvWtst.js","_app/immutable/chunks/DOKlEXlX.js","_app/immutable/chunks/CixMHp53.js","_app/immutable/chunks/Cr9EBSKj.js","_app/immutable/chunks/_tE6obZ3.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
