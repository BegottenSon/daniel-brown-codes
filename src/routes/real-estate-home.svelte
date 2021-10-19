<script>
    import { Analysis, propertyTax } from "$lib/REI-Calc/calc-store";
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";

    let myProperties = [];
    let propID;
    let index;
    let commaForDollars = /\B(?=(\d{3})+(?!\d))/g;

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
    <h1>Real Estate Calculator</h1>
    <p>Welcome to your home page. To get started, tap the "add new" button below. Be sure to save your analysis in order to revisit those properties. Your saved properties will also show up below.</p>
    <h2 class="add-text"><a href="real-estate-calculator" class="add">Add New</a></h2>
    <section class="list-container">
        {#each myProperties as property}
            <section class="card" on:click={load(property.id)}>
                <img class="cover-pic" src="https://res.cloudinary.com/begottenson/image/upload/c_scale,e_saturation:-56,w_500/v1634651658/house-1836070_1280_yyapxi.jpg" alt="cover ">
                <div class="address">
                    <h2>{property.property.address}</h2>
                    <h3>{property.property.city}, {property.property.state}</h3>
                </div>
                <h3>Purchase Price: ${property.purchase_info.price.toFixed(0).replace(commaForDollars, ",")}</h3>
                <div class="button-container">
                    <button on:click={load(property.id)}>Load</button>
                    <button on:click={deleteProp(property)} class="delete-button">Delete</button>
                </div>
            </section>
        {/each}
    </section>
    <p class="disclaimer">Please note that this calculator is meant to be used for informational purposes only. This does not constitue investment advice. The saving of your properties will only be accessible from the current browser you are using right now. To remove the properties, tap the delete button and all corresponding data will be removed for good.</p>
</main>

<style>
    main {
        display: grid;
        padding: 1em;
        max-width: 60ch;
        gap: 1em;
    }

    h1 {
        justify-self: center;
    }

    .address {
        margin-block-end: 1em;
    }

    .list-container {
        display: flex;
    }

    .card {
        display: flex;
        justify-content: space-between;
        height: 45vh;
        width: 20vw;
        flex-direction: column;
        padding: 1em;
        background-color: rgb(43, 26, 117);
        border-radius: 8px;
        transition: ease 300ms;
    }

    .card:hover {
        cursor: pointer;
        transform: scale(1.1);
    }

    .cover-pic {
        border-radius: 4px;
        opacity: 0.3;
        filter: saturate(0.2);
    }

    div > h3 {
        margin: 0;
        font-size: smaller;
    }

    .add-text {
        margin-block: 1.5em;
        justify-self: end;
    }

    .add {
        padding: 0.5em;
        background-color: var(--accent);
        border-radius: 8px;
        text-decoration: none;
    }

    .button-container {
        display: flex;
        justify-content: space-between;
    }

    button {
        background-color: rgba(54, 163, 54, 0.507);
        border: 1px solid rgb(54, 163, 5);
        border-radius: 4px;
        padding: 2.5% 8%;
        color: var(--soft-white);
        cursor: pointer;
    }

    .delete-button {
        background-color: rgba(133, 32, 32, 0.5);
        border: 1px solid rgb(133, 32, 32);
    }

    button:hover {
        background-color: rgb(54, 163, 5);
    }

    .delete-button:hover {
        background-color: rgb(133, 32, 32);
    }

    .disclaimer {
        background-color: var(--dark-blue);
        margin-block: 5em;
        padding: 1em;
        font-size: x-small;
    }

    @media(max-width: 600px) {
        .card {
            height: 30vh;
            width: 40vw;
        }
    }
</style>