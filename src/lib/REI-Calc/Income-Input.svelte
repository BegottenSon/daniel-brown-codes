<script>
    import { monthlyIncome, laundry, custom } from "./calc-store";

</script>

<section id="income">
    <h2>Income</h2>
    <label for="monthlyIncome">Monthly Income:</label>
    <input type="number" name="monthlyIncome" bind:value={$monthlyIncome}>

    <label for="laundry">Laundry Service:</label>
    <input type="number" name="laundry" bind:value={$laundry}>

    <label for="custom">Custom:</label>
    <input type="number" name="custom" bind:value={$custom}>
    <a href="#expenses">Next: Expenses</a>
</section>

<style>
    section {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
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