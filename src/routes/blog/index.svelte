<script context="module">
    import { allPosts } from '$lib/blog-utility';
    let blogs = [];
    
    //LOAD BLOG POSTS GLOB FILES INTO BLOGS
    for(let path in allPosts) {
        blogs.push(allPosts[path]().then(({metadata}) => {
            const post = metadata
            return { post };
        })
        )
    } ;

    //EXPORT BLOGS INTO POSTS
    export const load = async() => {
        const loadBlogs = await Promise.all(blogs);
        let posts = [];
        for( let file in loadBlogs){
            posts.push(loadBlogs[file].post)
        }
        return {
            props: {
                posts
            }
        }
    };
</script>

<script>
    import Transition from "$lib/Transition.svelte"
	import { flip } from "svelte/animate"
    export let posts;

    // SORT POSTS BY DATE
    const orderedPosts = posts.slice().sort((post1, post2) => {
        return new Date(post2.date) - new Date(post1.date);
    });

    //SETTINGS FOR FILTER AND POSTS STATE
	let hide = true;
	let blog = orderedPosts;

    // FILTERING POST BY TAG
	function filterPosts(e) {
		blog = posts.filter(post => post.tags.includes(e.target.textContent));
		hide = false;
	}

	function reset() {
		blog = orderedPosts;
		hide = true;
	}
</script>

<svelte:head>
	<title>My Thoughts</title>
</svelte:head>
<div class="hidden">
	{#each posts as post}
		<a href='blog/{post.slug}'>links</a>
	{/each}
</div>

<Transition>
    <main>
        <h1>My Thoughts</h1>
        <button class="reset" class:hide on:click={reset} >Reset</button>
        <ul>
            {#each blog as post (post.title)}
            <li class="posts" animate:flip={{duration: 200}}>
                <section class="picture-container">
                <a rel='prefetch' href='blog/posts/{post.slug}'>{@html post.picture}</a>	
                </section>
                <h2><a rel='prefetch' href='blog/posts/{post.slug}'>{post.title}</a></h2>
                <p>{post.summary}</p>
                <aside class="tags">
                    {#each post.tags as tag }    
                    <p on:click={filterPosts}>{tag}</p>
                    {/each}
                </aside>
            </li>
            {/each}
        </ul>
    </main>
</Transition>

<style>
    h1 {
		color: var(--blue);
		text-align: center;
	}
	
	.posts {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 0.5em;
		align-items: center;
		margin: 0 0 1em 0;
		padding: 0.8em;
		line-height: 1.5;
		list-style: none;
		max-width: 50ch;
		border-radius: 16px;
		background-color: hsla(228, 16%, 6%, 0.7);
		box-shadow: 0 15px 25px  hsla(228, 100%, 74%, 0.05);
		box-sizing: border-box;
	}

	.picture-container {
		display: flex;
		background-color: rgb(65, 65, 102);
		border-radius: 12px;
		padding: 0.5em;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0;
		gap: 2em;
	}

	a {
		text-decoration: none;
	}

	a:hover {
		color: var(--accent);
		transition: 300ms ease;
	}

	a :global(.post-picture) {
		display: inherit;
		background-color: var(--dark-blue);
		box-shadow: var(--dark-blue) 2px 2px 10px;
		border-radius: 12px;
		height: 150px;
		width: 300px;
		object-fit: cover;
		transition: 300ms ease;
	}

	a :global(.post-picture:hover) {
		transform: scale(1.02);
		
	}

	.tags {
		display: flex;
		/* gap: 0.5em; */
		align-self: flex-end;
	}

	.tags p {
		background-color: var(--dark-blue);
		border-radius: 4px;
		padding: 0.6em;
		cursor: pointer;
		margin-left: 0.5em;
	}
    .reset {
		font-size: 0.8em;
		text-align: center;
		background-color: var(--dark-blue);
		color: var(--begotten-white);
		border: 2px solid rgb(65, 65, 102);
		border-radius: 8px;
		padding: 1em;
		cursor: pointer;
	}

	.hide {
		display: none;
	}

	.hidden {
		display: none;
	}

	@media (max-width: 480px) {
		main {
			padding: 0 1em;
		}
	}
</style>