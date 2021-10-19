<script>
    import { Checkout, Analysis } from "$lib/REI-Calc/calc-store";
    import { onMount } from "svelte";

    let newKey;
    let savedAnalysis;
    let id = 1000;
    let myProperties = []

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
        savedAnalysis = Analysis
        collectData()
        localStorage.setItem('myProperties', JSON.stringify(myProperties))
    }

    onMount(() => {
        if(localStorage.getItem("myProperties")){ 
            myProperties = JSON.parse(localStorage.getItem("myProperties"));
            id = myProperties[myProperties.length - 1].id;
        }
    });
</script>

<section class="save-section">
    <button on:click={save}>Save</button>
</section>