<script>
    export let title;
    export let picture;
    export let tags;
</script>
<article class="blog-Post">
    <h1>{title}</h1>
	<div>
		{@html picture}
	</div>
    <slot></slot>
    <aside>
        {#each tags as tag}
            <h3>{tag}</h3>
        {/each}
    </aside>
</article>

<style>
    div {
        width: 500px;
        justify-self: center;
    }

    aside {
        display: flex;
        gap: 1em;
        place-self: end;
        margin-block: 1em;
    }
	
    h3 {
        background-color: var(--dark-blue);
        border-radius: 8px;
        padding: 0.4em;
        font-size: smaller;
    }

    article {
        display: grid;
        place-items: center;
        padding: 1em;
        font-size: 1.2em;
        max-width: 56ch;
    }

	h1 {
		color: var(--blue);
		font-size: 3em;
		text-align: center;
	}

	.blog-Post :global(h2) {
		color: var(--accent);
		font-size: 1.4em;
		font-weight: 500;
	}

	.blog-Post :global(p) {
		font-size: 1.2em;
	}

	.blog-Post :global(pre) {
		background-color: hsl(350, 58%, 23%);
		box-shadow: inset 1px 1px 5px rgba(0,0,0,0.05);
		justify-self: center;
		padding: 0.5em;
		overflow-x: scroll;
		width: 50vw;
	}

	.blog-Post :global(pre), .blog-Post :global(code) {
		color: var(--soft-white);
		padding: 0;
	}

	:global(pre) > :global(code) {
		background-color: transparent;
	}

	.blog-Post :global(ul) {
		line-height: 1.5;
	}

	.blog-Post :global(li) {
		margin: 0 0 0.5em 0;
	}

	.blog-Post :global(a) {
		text-decoration-color: var(--accent);
		text-decoration-style: double;
		text-decoration-thickness: 6%;
	}

	.blog-Post :global(blockquote) {
		color: hsl(242, 78%, 91%);
		font-style: italic;
		background-color: var(--dark-blue);
		padding: 1em;
	}

	@media (max-width: 600px) {
		h1 {
			text-align: center;
		}
		div {
			width: 300px;
		}

		article {
			padding: 0 1.5em;
		}

		.blog-Post :global(pre) {
			width: 80vw;
		}
	}
</style>