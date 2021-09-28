<script>
    import { Analysis, Checkout } from "$lib/REI-Calc/calc-store";

    //UNSUBSCRIBES FOR FORMULAS
    let total_expenses = Checkout.add(Analysis.fixed_expenses) + Checkout.percentageSum(Analysis.varible_expenses);
    let total_income = Checkout.add(Analysis.income);
    let interest_rate = Checkout.store(Analysis.loan_info.interest) / 100;
    let loan_amount = Checkout.store(Analysis.purchase_info.price) - Checkout.store(Analysis.loan_info.downPayment);

    //FORMULAS
    let noi = total_income - total_expenses;
    let periodic_rate = Math.pow((1 + interest_rate / 12), 360)
    let denominatorA = periodic_rate - 1;
    let denominatorB = interest_rate / 12 * periodic_rate;
    let mortgage = (loan_amount / (denominatorA / denominatorB));
    let cash_flow = (total_income - total_expenses - mortgage).toFixed(2);
    let coc = (cash_flow * 12) / (Checkout.store(Analysis.purchase_info.closingCost) + Checkout.store(Analysis.loan_info.downPayment)) ;
    let cap = (noi / Checkout.store(Analysis.purchase_info.price)) * 100;
    let commaForDollars = /\B(?=(\d{3})+(?!\d))/g;

</script>

<h2>Expected Returns</h2>
<section class="returns">
    <div class="segments">
        <h3>NOI</h3>
        <p>${noi.toFixed(2).replace(commaForDollars, ",")}</p>
    </div>

    <div class="segments">
        <h3>CoC Return</h3>
        <p>{coc.toFixed(2)}%</p>    
    </div>

    <div class="segments">
        <h3>Cap Rate</h3>
        <p>{cap}%</p>   
    </div>
</section>

<style>
    .returns {
        display: flex;
        gap: 1.5em;
    }

    .segments {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>