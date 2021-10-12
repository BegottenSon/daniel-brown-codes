<script>
    import { price, closingCost, ARV, repairCost, appreciation } from "./calc-store.js";
</script>
<main>
    <h2>Purchase Information</h2>
    <section id="purchase">
        <div>
            <label for="price">Purchase Price:</label>
            <input type="number" name="price" bind:value={$price}>
        </div>
    
        <div>
            <label for="closingCost">Closing Cost:</label>
            <input type="number" name="closingCost" bind:value={$closingCost}>
        </div>
    
        <div>
            <label for="ARV">After Repair Value:</label>
            <input type="number" name="ARV" bind:value={$ARV}>
        </div>
    
        <div>
            <label for="repairCost">Repair Cost:</label>
            <input type="number" name="repairCost" bind:value={$repairCost}>
        </div>
    
        <div>
            <label for="appreciation">Appreciation:</label>
            <input type="number" name="appreciation" bind:value={$appreciation}>
        </div>
    </section>
    <a href="#loan-info">Next: Loan Info</a>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
    }
    section {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 1em;
        /* flex-direction: column; */
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    h2 {
        text-align: center;
    }

    input {
        appearance: none;
        background-color: var(--dark-blue);
        color: var(--soft-white);
        border: 2px solid var(--darker-blue);
        border-radius: 4px;
        height: 20px;
        /* width: 60px; */
    }

    a {
        align-self: flex-end;
        background-color: var(--accent);
        border-radius: 4px;
        margin: 2em;
        padding: 0.6em;
        text-decoration: none;
    }

    @media(max-width: 400px) {
        a {
            align-self: center;
        }
    }
</style>