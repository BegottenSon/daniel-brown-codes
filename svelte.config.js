import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import netlify from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: [".svelte", ...mdsvexConfig.extensions],

    kit: {
		adapter: netlify(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	},
    preprocess: mdsvex(mdsvexConfig),
    paths: {
		assets: '',
		base: ''
	}
};

export default config;
