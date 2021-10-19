<script>
    import { Checkout, Analysis } from "$lib/REI-Calc/calc-store";
    import { onMount } from "svelte";

    let newKey;
    let savedAnalysis;
    let loadedProperties;
    let loadedAnalysis;
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
        loadedAnalysis = prop.filter(property => property.id === 1001).pop();
        matchKeys(loadedAnalysis)
    }

//BUTTON FUNCTIONS
    function save() {
        savedAnalysis = Analysis
        collectData()
        localStorage.setItem('myProperties', JSON.stringify(myProperties))
    }

    function deleteAll() {
       localStorage.removeItem("myProperties")
    }
    
    function findProperty() {
        loadedProperties = JSON.parse(localStorage.getItem("myProperties"));
        loadProperty(loadedProperties);
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
    <button on:click={deleteAll}>Delete All</button>
    <button on:click={findProperty}>Find This</button>
</section>