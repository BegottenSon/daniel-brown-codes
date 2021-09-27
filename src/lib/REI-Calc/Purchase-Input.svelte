<script>
    import { price, closingCost, ARV, repairCost, appreciation } from "./calc-store.js";
</script>
<section id="purchase">
    <h2>Purchase Information</h2>
    <label for="price">Purchase Price:</label>
    <input type="number" name="price" bind:value={$price}>

    <label for="closingCost">Closing Cost:</label>
    <input type="number" name="closingCost" bind:value={$closingCost}>

    <label for="ARV">After Repair Value:</label>
    <input type="number" name="ARV" bind:value={$ARV}>

    <label for="repairCost">Repair Cost:</label>
    <input type="number" name="repairCost" bind:value={$repairCost}>

    <label for="appreciation">Appreciation:</label>
    <input type="number" name="appreciation" bind:value={$appreciation}>
</section>

<a href="#loan-info">Next: Loan Info</a>