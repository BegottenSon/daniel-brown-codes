---
layout: blog
title: How to Setup a Markdown Blog Using Sapper & Svelte
slug: setup-markdown-blog-using-sapper
picture: <img src='https://images.unsplash.com/photo-1505238680356-667803448bb6' alt='Creative Discourse Event Logo' width="100%" class="post-picture">
summary: Seeing that I’m new to Svelte/Sapper, let alone coding on a consistent basis, I decided to learn this framework by...
date: 2020-10-31
tags:
    - code
    - sapper
    - svelte
---

Seeing that I’m new to Svelte/Sapper, let alone coding on a consistent basis, I decided to learn this framework by creating my own website with it. Not knowing much about the routing, of course I went with starting off with the Sapper template.

The Sapper template and documents are great, I must say. I posted my first blog post using the setup that was giving in the template but I knew I would want to learn how to write my blog using markdown files. Didn’t really like the idea of writing all my posts directly in the post array in `_posts.js` file. So that is where my journey begins.

## Setup
Seeing that I already had a template, I added a “posts” folder inside the “blog” folder to hold all my markdown files. Then I placed a `test.md` file in the “posts” folder. In the markdown file I setup my personal blog file like this:
```
---
title: My Title
slug: my-title
picture: `<img src="image-link-here" alt="alt here">
summary: Summary goes here...
date: 2020-11-31
tags: tag 1, tag 2, tag 3
---
"Post content goes here"
```

## Enabling Markdown to be Read
From the initial setup, that was the point I had to search for answers using the most important tool for developers… Google!

I found this good _rollup plugin_ from [Jack Franklin npm package](https://www.npmjs.com/package/@jackfranklin/rollup-plugin-markdown). I npm installed it with:

```
npm install —save-dev @jackfranklin/rollup-plugin-markdown
```
> Make sure to run this install in the base directory of your app! “My-app” folder for example. I didn’t do this at first and it caused problems during the build, which I will talk about later!  

Next, I installed this _glob plugin_ from [rollup plugin glob](https://www.npmjs.com/package/rollup-plugin-glob):

```
npm I rollup-plugin-glob
```
This helps to pull all the files found in the “posts” folder into a `.js` file with `import all from ./posts/*.md`.

Then I learned that I had to go to `rollup.config.js` file in import the plugins:
```
import markdown from ‘@jackfranklin/rollup-plugin-markdown’
import glob from ‘rollup-plugin-glob’
// scroll down and add the plugins in the exports
export {
  client: {
    plugins: [
      markdown(),
      glob(),
      // whatever other code that pops up here
    ],
    // and here
  },

  server: {
    plugins: [
      markdown(),
      glob(),
      // more code here again
    ],
    // even more code here
  }
}
```

## Displaying the Posts
Here is where I imported my blog posts. Inside the `routes/blog/_posts.js` I placed this is the file:
```
import all from “./posts/*.md”;

const posts = all;

///SORT POST BY DATE IN DESCENDING ORDER/
posts.sort(function(postA, postB) {
    let a = new Date(postA.metadata.date),
        b = new Date(postB.metadata.date);
    if (a > b) 
        return -1;
    if ( a < b)
        return 1;
    return 0
})

export default posts;
```

Moving over to the `routes/blog/[slug].json.js`, I added this along with what was included in the template:
```
import posts from ‘./_posts.js’;

const blog = posts.map(post => {
    return {
        html: post.html,
        title: post.metadata.title,
        slug: post.metadata.slug,
        picture: post.metadata.picture,
        summary: post.metadata.summary,
        date: post.metadata.date,
        tags: post.metadata.tags.split(“,”)
    }
})

const lookup = new Map();
blog.forEach(post => {
    lookup.set(post.slug, JSON.stringify(post));
});

//THIS SECTION ALREADY EXISTED IN THE TEMPLATE
export function get(req, res, next) {

    const { slug } = req.params;

    if (lookup.has(slug)) {
        res.writeHead(200, {
            ‘Content-Type’: ‘application/json’
        });

        res.end(lookup.get(slug));
    } else {
        res.writeHead(404, {
            ‘Content-Type’: ‘application/json’
        });

        res.end(JSON.stringify({
            message: `Not found`
        }));
    }
}
```
Check out the `tags: post.metadata.tags.split(“,”)`, I used this to help later with filtering posts by tags.

In the `routes/blog/index.json.js` file I wrote:
```
import posts from ‘./_posts.js’;

const contents = JSON.stringify(posts.map(post => {
    return {
        title: post.metadata.title,
        slug: post.metadata.slug,
        picture: post.metadata.picture,
        summary: post.metadata.summary,
        date: post.metadata.date,
        tags: post.metadata.tags.split(“,”),
    };
}));

export function get(req, res) {
    res.writeHead(200, {
        ‘Content-Type’: ‘application/json’
    });

    res.end(contents);
}
```
Pretty much the same as in the other file. I found that mapping over each post like this made it easier syntactically to display the posts in the index file. Adding the `.map()` returns each post where you can get to the data with `post.title` for example, instead of having to remember each time to write out `post.metadata.title`.

Now it all comes together. In `blog/index.svelte` I could now display my posts. First I kept the context module to access the posts variable: 
```
<script context=“module”>
    export function preload({ params, query }) {
        return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
            return { posts };
        });
    }
</script>
```

Added another regular script tag and coded in the ability to filter. As promised, the `split()` came in handy to easily filter by tags:
```
<script>
    export let posts;

///SETTINGS FOR FILTER/
    let blog = posts;

/// FILTERING POST BY TAG/
    function filterPosts(e) {
        blog = posts.filter(post => post.tags.includes(e.target.textContent));
        hide = false;
    }

</script>
```
Now, I simply displayed the posts by using the ease of Svelte syntax: 
```
<main>
        <h1>My Thoughts</h1>
        <ul>
            {#each blog as post (post.title)}
            <div class=“posts”>
                <div class=“picture-container”>
                <a rel=‘prefetch’ href=‘blog/{post.slug}’>{@html post.picture}</a>  
                </div>
                <li><a rel=‘prefetch’ href=‘blog/{post.slug}’>{post.title}</a></li>
                <p>{post.summary}</p>
                <div class=“tags”>
                    {#each post.tags as tag}
                        <h5 on:click={filterPosts}>{tag}</h5>
                    {/each}
                </div>
            </div>
            {/each}
        </ul>
    </main>
```

To read a post, I hopped over to `[slug].svelte` and added:
```
<script context=“module”>
    export async function preload({ params, query }) {
        
        const res = await this.fetch(`blog/${params.slug}.json`);
        const data = await res.json();

        if (res.status === 200) {
            return { post: data };
        } else {
            this.error(res.status, data.message);
        }
    }
</script>

<script>
    export let post;
</script>

//NOW DISPLAY THE POST
<article>
    <h1>{post.title}</h1>
    <div class=‘content’>
        {@html post.html}
    </div>
</article>
```

## Deploy
Boom, files are ready to be deployed! I used the options in VS Code to synchronize my files with GitHub which automatically deploys to Netlify.

Oh, that problem I said I encountered in the beginning of this post… I installed the plugins in the folder holding my website app instead of the website app folder itself. This allowed everything to work in localhost:3000. After racking my brain to find the problem, I still couldn’t figure out the error. It wasn’t till the next morning during my morning meditation that the answer randomly popped in my head (true story). I realized I had to install the plugins in the right directory.

Upon fixing my error, I saw immediately that my `package.json` file now had the correct dependancies for the plugins. Re-deployed and hello new shiny blog!
