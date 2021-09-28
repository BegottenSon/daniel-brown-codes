<script>
    import { Analysis, Checkout } from "$lib/REI-Calc/calc-store";
    import ExpensesAnalysis from "$lib/REI-Calc/Expenses-Analysis.svelte";    
    import Returns from "$lib/REI-Calc/Returns.svelte";

    //INSTANCES FOR SUBSCRIBING TO ANALYSIS
    let total_income = Checkout.add(Analysis.income);
    let total_fixed_expenses = Checkout.add(Analysis.fixed_expenses);
    let total_varible_expenses = Checkout.percentageSum(Analysis.varible_expenses);
;

    //UNSUBSCRIBES FOR FORMULAS
    let interest_rate = Checkout.store(Analysis.loan_info.interest) / 100;
    let loan_amount = Checkout.store(Analysis.purchase_info.price) - Checkout.store(Analysis.loan_info.downPayment);

    //FORMULAS
    let periodic_rate = Math.pow((1 + interest_rate / 12), 360)
    let denominatorA = periodic_rate - 1;
    let denominatorB = interest_rate / 12 * periodic_rate;
    let mortgage = (loan_amount / (denominatorA / denominatorB));
    let cash_flow = (total_income - total_fixed_expenses - total_varible_expenses - mortgage).toFixed(2);
    let total_monthly_expenses = total_fixed_expenses + total_varible_expenses + mortgage;
    let commaForDollars = /\B(?=(\d{3})+(?!\d))/g;
</script>
<main>
    <h2>Income</h2>
    <p class="numbers">{total_income.toFixed(2).replace(commaForDollars, ",")}</p>
    <h2>Mortgage Payment</h2>
    <p class="numbers">{mortgage.toFixed(2).replace(commaForDollars, ",")}</p>
    <h2>Total Monthly Expenses</h2>
    <p class="numbers">{total_monthly_expenses.toFixed(2).replace(commaForDollars, ",")}</p>
    <h2>Monthly Cash Flow</h2>
    <p class="numbers">{cash_flow.replace(commaForDollars, ",")}</p>
    <ExpensesAnalysis />
    <Returns />

</main>

<style>
    main {
        display: grid;
        place-items: center;
        background-color: rgb(210, 247, 232);
        color: rgb(104, 6, 79);
        width: 96vw;
    }
    .numbers {
        font-size: large;
        font-weight: bold;
    }

</style>