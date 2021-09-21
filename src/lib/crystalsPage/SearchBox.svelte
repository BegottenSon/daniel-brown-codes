<script>
    export let search;
</script>

<input type="search" placeholder="Search by Crystal or Chakra" bind:value={search} on:keyup>


<style>
    input[type="search"] {
		border: none;
		border-bottom: var(--blue) 2px solid;
		border-radius: 2px;
		color: var(--soft-white);
		background-color: rgb(33, 34, 54);
		-webkit-appearance: none;
	}
</style>    
