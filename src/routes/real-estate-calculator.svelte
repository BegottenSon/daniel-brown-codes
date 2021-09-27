<script>
    import Expenses_Input from "$lib/REI-Calc/Expenses-Input.svelte";
    import Income_Input from "$lib/REI-Calc/Income-Input.svelte";
    import LoanInfo_Input from "$lib/REI-Calc/Loan-Info-Input.svelte";
    import Property_Input from "$lib/REI-Calc/Property-Info-Input.svelte";
    import Purchase_Input from "$lib/REI-Calc/Purchase-Input.svelte";
</script>
<svelte:head>REI Calculator</svelte:head>
<section class="calculator">
    <h1>Real Estate Investor Calculator</h1>
    <Property_Input/>
    <Purchase_Input />
    <LoanInfo_Input />
    <Income_Input />
    <Expenses_Input />
</section>
<a href="real-estate-analysis">Crunch the Numbers</a>