<script>
    import { propertyTax, insurance, repairs, vacancy, management, capEx, electricity, gas, water, hoa, garbage, other } from "./calc-store";
</script>

<section id="expenses">
    <h2>Expenses</h2>
    <label for="propertyTax">Property tax:</label>
    <input type="number" name="propertyTax" bind:value={$propertyTax}>

    <label for="insurance">Insurance:</label>
    <input type="number" name="insurance" bind:value={$insurance}>

    <label for="repairs">Repairs & Maintanance:</label>
    <input type="number" name="repairs" bind:value={$repairs}>

    <label for="vacancy">Vacancy:</label>
    <input type="number" name="vacancy" bind:value={$vacancy} placeholder="%">

    <label for="capEx">Capital Expenditure:</label>
    <input type="number" name="capEx" bind:value={$capEx}>

    <label for="management">Management Fees:</label>
    <input type="number" name="management" bind:value={$management}>

    <label for="electricity">Electricity:</label>
    <input type="number" name="electricity" bind:value={$electricity}>

    <label for="gas">Gas:</label>
    <input type="number" name="gas" bind:value={$gas}>

    <label for="water">Water:</label>
    <input type="number" name="water" bind:value={$water}>

    <label for="garbage">Garbage:</label>
    <input type="number" name="garbage" bind:value={$garbage}>

    <label for="hoa">HOA Fees:</label>
    <input type="number" name="hoa" bind:value={$hoa}>

    <label for="other">Other:</label>
    <input type="number" name="other" bind:value={$other}>
</section>