<script>
    import Expenses_Input from "$lib/REI-Calc/Expenses-Input.svelte";
    import Income_Input from "$lib/REI-Calc/Income-Input.svelte";
    import LoanInfo_Input from "$lib/REI-Calc/Loan-Info-Input.svelte";
    import Property_Input from "$lib/REI-Calc/Property-Info-Input.svelte";
    import Purchase_Input from "$lib/REI-Calc/Purchase-Input.svelte";
</script>
<svelte:head>REI Calculator</svelte:head>
<main>
    <section class="calculator">
        <h1>Real Estate Investor Calculator</h1>
        <Property_Input/>
        <Purchase_Input />
        <LoanInfo_Input />
        <Income_Input />
        <Expenses_Input />
    </section>
    <a href="real-estate-analysis">Crunch the Numbers</a>
</main>

<style>
    main {
        display: grid;
        place-items: center;
        width: 100%;
        padding-block-end: 10em;
        background-color: rgb(44, 5, 18);

    }

    h1 {margin-block-start: 1em;
        text-align: center;
    }
    
    a {
        width: 50vw;
        align-self: flex-end;
        background-color: var(--accent);
        border-radius: 4px;
        margin-block: 2em;
        padding: 0.6em;
        text-align: center;
        text-decoration: none;
    }

    .calculator {
        width: 80vw;
    }
</style>