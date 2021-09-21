const config = {
  layout: {
    blog: "./src/lib/BlogLayout.svelte"
  },
  extensions: [".svelte.md", ".md", ".svx"],

  "smartypants": {
    "dashes": "oldschool"
  },

  "remarkPlugins": [],
  "rehypePlugins": []
};

export default config;