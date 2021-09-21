<script>
    import { onMount, onDestroy } from 'svelte';
    import { fade } from 'svelte/transition';

    onMount(() => { fadingIn = true; });

    onDestroy(() => { fadingOut = true; });

    let fadingIn = false;
    let fadingOut = false;
</script>

<style>
    div {
        position: relative;
    }
</style>

    {#if fadingIn || fadingOut}

    <div in:fade={{delay: 300, duration: 300}} out:fade={{duration: 300}} >
        <slot></slot>
    </div>
        
    {/if}
