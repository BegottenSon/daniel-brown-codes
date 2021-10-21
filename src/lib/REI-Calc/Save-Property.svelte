<script>
    import { Checkout, Analysis } from "$lib/REI-Calc/calc-store";
    import { onMount } from "svelte";

    let newKey;
    let savedAnalysis;
    let id = 1000;
    let myProperties = [];
    let saved = false;

//COLLECTING DATA FOR SAVING
    function collectData() {
        for(let group in savedAnalysis) {
            checkoutObject(savedAnalysis[group])
        };
        id += 1;
        savedAnalysis.id = id;
        myProperties.push(savedAnalysis)
    }

    function checkoutObject(obj) {
        for(let data in obj) {
            newKey = Checkout.store(obj[data]);
            obj[data] = newKey;
        }  
    }

//BUTTON FUNCTIONS
    function save() {
        savedAnalysis = Analysis;
        collectData();
        localStorage.setItem('myProperties', JSON.stringify(myProperties));
        saved = true;
    }

    onMount(() => {
        if(localStorage.getItem("myProperties")){ 
            myProperties = JSON.parse(localStorage.getItem("myProperties"));
            id = myProperties[myProperties.length - 1].id;
        }
    });
</script>

<section class="save-section">
    {#if saved}
    <div class="checkmark">
        <svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path d="M27.538 46.38 7.921 26.763 0 34.683l27.478 27.478.105-.106.061.061L72 17.76l-7.921-7.921L27.538 46.38Z" fill="#ebebeb"/></svg>
    </div>
     {:else} 
     <button on:click={save}>Save</button>
    {/if}
    <a href="real-estate-calculator">Back</a>
    <a href="real-estate-home">Home</a>
</section>

<style>
    section {
        display: flex;
        gap: 0.8em;
        margin-block-start: 1em;
    }

    button, a {
        border-radius: 8px;
        color: var(--soft-white);
        font-size: 1em;
    }

    button {
        background-color: rgb(54, 163, 54);
        border: 0.5em solid rgb(54, 163, 54);

    }
    
    a {
        background-color: var(--blue);
        border: 0.5em solid var(--blue);
        text-decoration: none;
    }

    svg {
        height: 1.2em;
    }

    .checkmark {
        display: grid;
        place-items: center;
        height: 1.5em;
        width: 2.5em;
        background-color: rgb(54, 163, 54);
        border: 0.5em solid rgb(54, 163, 54);
        border-radius: 8px;
    }
</style>