<script>
    import { propertyTax, insurance, repairs, vacancy, management, capEx, electricity, gas, water, hoa, garbage, other } from "./calc-store";

    let f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12, f13, f14, f15, f16, f17, f18;

    f5 = true;
    f6 = true;
    f12 = true;
    f18 = true;

    function handleButtons(e) {
        let value = e.target.value;
        let name = e.target.name;
        if(name === "repairs") {
            $repairs = value
            f1 = false;
            f2 = false;
            f3 = false;
            f4 = false;
            f5 = false;
        };
        if(name === "vacancy") {
            $vacancy = value
            f6 = false;
            f7 = false;
            f8 = false;
            f9 = false;
        };
        if(name === "capEx") {
            $capEx = value
            f10 = false;
            f11 = false;
            f12 = false;
            f13 = false;
        };
        if(name === "management") {
            $management = value
            f14 = false
            f15 = false
            f16 = false
            f17 = false
            f18 = false
        };

        if(name === "repairs" && value == 0) f1 = true;
        if(name === "repairs" && value == 5) f2 = true;
        if(name === "repairs" && value == 6) f3 = true;
        if(name === "repairs" && value == 8) f4 = true;
        if(name === "repairs" && value == 10) f5 = true;

        if(name === "vacancy" && value == 5) f6 = true;
        if(name === "vacancy" && value == 6) f7 = true;
        if(name === "vacancy" && value == 8) f8 = true;
        if(name === "vacancy" && value == 10) f9 = true;

        if(name === "capEx" && value == 0) f10 = true;
        if(name === "capEx" && value == 5) f11 = true;
        if(name === "capEx" && value == 8) f12 = true;
        if(name === "capEx" && value == 10) f13 = true;
        
        if(name === "management" && value == 0) f14 = true;
        if(name === "management" && value == 7) f15 = true;
        if(name === "management" && value == 8) f16 = true;
        if(name === "management" && value == 9) f17 = true;
        if(name === "management" && value == 10) f18 = true;
    }
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
    <section class="percentage-section">
        <div class="percentage-container">
            <label for="repairs">Repairs & Maintanance:</label>
            <div class="input-buttons">
                <button class:f1 name="repairs" value=0 on:click={handleButtons}>0%</button>
                <button class:f2 name="repairs" value=5 on:click={handleButtons}>5%</button>
                <button class:f3 name="repairs" value=6 on:click={handleButtons}>6%</button>
                <button class:f4 name="repairs" value=8 on:click={handleButtons}>8%</button>
                <button class:f5 name="repairs" value=10 on:click={handleButtons}>10%</button>
            </div>
        </div>
    
        <div class="percentage-container">
            <label for="vacancy">Vacancy:</label>
            <div class="input-buttons">
                <button class:f6 name="vacancy" value=5 on:click={handleButtons}>5%</button>
                <button class:f7 name="vacancy" value=6 on:click={handleButtons}>6%</button>
                <button class:f8 name="vacancy" value=8 on:click={handleButtons}>8%</button>
                <button class:f9 name="vacancy" value=10 on:click={handleButtons}>10%</button>
            </div>
        </div>
    
        <div class="percentage-container">
            <label for="capEx">Capital Expenditure:</label>
            <div class="input-buttons">
                <button class:f10 name="capEx" value=0 on:click={handleButtons}>0%</button>
                <button class:f11 name="capEx" value=5 on:click={handleButtons}>5%</button>
                <button class:f12 name="capEx" value=8 on:click={handleButtons}>8%</button>
                <button class:f13 name="capEx" value=10 on:click={handleButtons}>10%</button>
            </div>
        </div>
    
        <div class="percentage-container">
            <label for="management">Management Fees:</label>
            <div class="input-buttons">
                <button class:f14 name="management" value=0 on:click={handleButtons}>0%</button>
                <button class:f15 name="management" value=7 on:click={handleButtons}>7%</button>
                <button class:f16 name="management" value=8 on:click={handleButtons}>8%</button>
                <button class:f17 name="management" value=9 on:click={handleButtons}>9%</button>
                <button class:f18 name="management" value=10 on:click={handleButtons}>10%</button>
            </div>
        </div>

    </section>
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

    button {
        background-color: var(--blue);
        border-color: var(--blue);
        border-radius: 4px;
        color: var(--soft-white);
        width: 120px;
        height: 35px;
        font-size: 1em;
    }

    .f1, .f2, .f3, .f4, .f5, .f6, .f7, .f8 , .f9, .f10, .f11, .f12, .f13, .f14, .f15, .f16, .f17, .f18 {
        background-color: var(--accent);
        border-color: var(--accent);
    }

    .percentage-section {
        grid-column: 1/3;
        justify-self: center;
        display: flex;
        flex-direction: column;
    }

    .percentage-container {
        display: flex;
        flex-direction: column;
    }

    .input-buttons {
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
        gap: 0.2em;
    }

</style>