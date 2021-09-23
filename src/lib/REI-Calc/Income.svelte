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
</section>

<a href="#expenses">Next: Expenses</a>