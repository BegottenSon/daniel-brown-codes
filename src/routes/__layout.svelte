<script>
	import Nav from '$lib/Nav.svelte';
	import Footer from '$lib/Footer.svelte';
	import "../app.css"
</script>

<style>
	main {
		display: grid;
		place-items: center;
		position: relative;
		margin: 0 auto;
		box-sizing: border-box;
	}

	:global(.p-links) {
		font-weight: 700;
		color: var(--accent);
		text-decoration: none;
	}

	@media (max-width: 480px) {
		main {
			margin-bottom: 64px;
		}
	}
</style>

<svelte:head>
	<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=Itim&family=Quicksand&family=Roboto:wght@900&display=swap" rel="stylesheet">
</svelte:head>

<Nav />

<main>
	<slot></slot>
</main>

<Footer />