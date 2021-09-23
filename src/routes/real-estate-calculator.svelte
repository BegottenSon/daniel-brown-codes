<script>
    import Expenses from "$lib/REI-Calc/Expenses.svelte";
    import Income from "$lib/REI-Calc/Income.svelte";
    import LoanInfo from "$lib/REI-Calc/Loan-Info.svelte";
    import Property from "$lib/REI-Calc/Property-Info.svelte";
    import Purchase from "$lib/REI-Calc/Purchase.svelte";
</script>
<svelte:head>REI Calculator</svelte:head>
<section class="calculator">
    <h1>Real Estate Investor Calculator</h1>
    <Property/>
    <Purchase />
    <LoanInfo />
    <Income />
    <Expenses />
</section>
<a href="real-estate-analysis">Crunch the Numbers</a>