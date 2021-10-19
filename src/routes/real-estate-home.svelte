<script>
    import { Analysis } from "$lib/REI-Calc/calc-store";
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";

    let myProperties = [];
    let propID;
    let index;

    //LOADING DATA TO ANALYSIS
    function matchKeys(obj) {
        let originalArr = [];
        let originalCat;

        for(let category in Analysis) {
            originalCat = Object.entries(Analysis[category]);
            originalArr.push(originalCat);
        }

        for(let category in obj) {
            for(let keys in obj[category]) {
                originalArr.forEach(arr => {
                    arr.forEach(arr2 => {
                        if(arr2[0] === keys){
                            arr2[1].set(obj[category][keys])
                        }
                    })
                })
            }
        }
    }

    function loadProperty(prop) {
        let loadedAnalysis = prop.filter(property => property.id === propID).pop();
        matchKeys(loadedAnalysis)
    }

    onMount(() => {
        if(localStorage.getItem("myProperties")){ 
            myProperties = JSON.parse(localStorage.getItem("myProperties"));
        }
    });

    //DELETING PROPERTIES
    function deleteFromArray() {
        myProperties.splice(index, 1);
        localStorage.setItem("myProperties", JSON.stringify(myProperties))
    }

    //HANDLE BUTTONS
    function load(id) {
        propID = id;
        loadProperty(myProperties);
        goto("real-estate-analysis")
    }

    function deleteProp(property) {
        index = myProperties.indexOf(property);
        deleteFromArray();
    }
</script>

<main>
    {#each myProperties as property}
        <section class="card">
            <h2>{property.property.address}</h2>
            <h3>{property.property.city}</h3>
            <h3>{property.property.state}</h3>
            <button on:click={load(property.id)}>Load</button>
            <button on:click={deleteProp(property)}>Delete</button>
        </section>
    {/each}
    <h2 class="new"><a href="real-estate-calculator" class="add">Add New</a></h2>
</main>

<style>
    .card {
        display: flex;
        flex-direction: column;
        padding: 1em;
        background-color: rgb(28, 58, 48);
    }

    .new {
        margin-block-start: 1.5em;
    }

    .add {
        padding: 1em;
        background-color: var(--accent);
        border-radius: 8px;
        text-decoration: none;
    }
</style>