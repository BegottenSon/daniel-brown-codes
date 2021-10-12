<script>
    import { propertyTax, insurance, repairs, vacancy, management, capEx, electricity, gas, water, hoa, garbage, other } from "./calc-store";
</script>

<h2>Expenses</h2>
<section id="expenses">
    <div>
        <label for="propertyTax">Property tax:</label>
        <input type="number" name="propertyTax" bind:value={$propertyTax}>
    </div>

    <div>
        <label for="insurance">Insurance:</label>
        <input type="number" name="insurance" bind:value={$insurance}>   
    </div>
    
    <div>
        <label for="repairs">Repairs & Maintanance:</label>
        <input type="number" name="repairs" bind:value={$repairs}>
    </div>

    <div>
        <label for="vacancy">Vacancy:</label>
        <input type="number" class="perectange-input" name="vacancy" bind:value={$vacancy} placeholder="%"> 
    </div>

    <div>
        <label for="capEx">Capital Expenditure:</label>
        <input type="number" class="perectange-input" name="capEx" bind:value={$capEx}> 
    </div>

    <div>
        <label for="management">Management Fees:</label>
        <input type="number" class="perectange-input" name="management" bind:value={$management}>
    </div>

    <div>
        <label for="electricity">Electricity:</label>
        <input type="number" name="electricity" bind:value={$electricity}>
    </div>

    <div>
        <label for="gas">Gas:</label>
        <input type="number" name="gas" bind:value={$gas}>
    </div>

    <div>
        <label for="water">Water:</label>
        <input type="number" name="water" bind:value={$water}>
    </div>

    <div>
        <label for="garbage">Garbage:</label>
        <input type="number" name="garbage" bind:value={$garbage}>
    </div>

    <div>
        <label for="hoa">HOA Fees:</label>
        <input type="number" name="hoa" bind:value={$hoa}>
    </div>

    <div>
        <label for="other">Other:</label>
        <input type="number" name="other" bind:value={$other}>
    </div>
</section>

<style>
    section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.8em;
    }

    h2 {
        text-align: center;
    }
    div {
        display: flex;
        justify-content: space-between;
    }

    input {
        appearance: none;
        background-color: var(--dark-blue);
        color: var(--soft-white);
        border: none;
        border-radius: 4px;
        width: 60px;
    }

    .perectange-input {
        position: relative;
    }

    .perectange-input::after {
        position: absolute;
        bottom: 0;
        right: 100%;
        content: "A";
        height: 20px;
        width: 20px;
    }
</style>