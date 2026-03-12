import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		paths: {
			base: ''
		},
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: '200.html',
			precompress: false,
			strict: false
		})
	}
};

export default config;
