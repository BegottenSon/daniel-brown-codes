<script>
    import Transition from '$lib/Transition.svelte';

    let musicService = [
        'Spotify', 
        'Apple Music'
    ];

    let service = 'Spotify';


</script>

<style>
    .musicSelect, label, h1, section {
        text-align: center;
    }

    input {
        display: none;
    }

    label {
        margin: 1em;
        padding: 1em;
        background-color: var(--dark-blue);
        border: 2px solid rgb(65, 65, 102);
        border-radius: 8px;
        cursor: pointer;
    }

    label:hover {
        border-color: var(--accent);
    }

    h1 {
        margin: 1em;
    }

    section {
        margin: 4em auto;
    }

    iframe {
        border-radius: 8px;
        width: 400px;
    }

    @media (max-width: 480px) {
        iframe {
            width: 300px;
        }
    }
</style>

<svelte:head>
    <title>My Music</title>
</svelte:head>

<Transition>
    
<h1>My Music</h1>

<div class="musicSelect">
    {#each musicService as music}
        <label>
            <input type=radio bind:group={service} value={music}>
            {music}
        </label>
    {/each}
</div>

<section>
 {#if service === "Spotify"}
        <h2>Spotify</h2>
        <!-- svelte-ignore a11y-missing-attribute -->
        <iframe src="https://open.spotify.com/embed/playlist/5UYnTFxusIlCY7uLFGETwP" width="400" height="450" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    {:else if service === "Apple Music"}
        <h2>Apple Music</h2>
        <!-- svelte-ignore a11y-missing-attribute -->
        <iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="450" style="max-width:960px;overflow:hidden;background:transparent;background-color:none;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/begottensonday/pl.u-K1aWTZ5A1MG"></iframe>
    {/if}   
</section>

</Transition>