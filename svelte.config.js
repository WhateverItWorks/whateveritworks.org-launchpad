import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		csp: {
			mode: 'auto',
			directives: {
				'default-src': ['self'],
				'img-src': ['self', '*.whateveritworks.org', 'raw.githubusercontent.com', '0xacab.org', 'www.abuseipdb.com'],
				'connect-src': ['self', 'statusapi.whateveritworks.org'],
				'style-src': ['self', 'unsafe-inline'],
			}
		}
	}
};

export default config;
