<script>
    import { Analysis, Checkout } from "$lib/REI-Calc/calc-store";
   
    //PERCENTAGES UNSUBSCRIBES
    let management = Checkout.percent(Analysis.varible_expenses.management);
    let vacancy = Checkout.percent(Analysis.varible_expenses.vacancy);
    let capEx = Checkout.percent(Analysis.varible_expenses.capEx);
    let repairs = Checkout.percent(Analysis.varible_expenses.repairs);

    //UNSUBSCRIBES FOR FORMULAS
    let interest_rate = Checkout.store(Analysis.loan_info.interest) / 100;
    let loan_amount = Checkout.store(Analysis.purchase_info.price) - Checkout.store(Analysis.loan_info.downPayment);
    let total_fixed_expenses = Checkout.add(Analysis.fixed_expenses);
    let total_varible_expenses = Checkout.percentageSum(Analysis.varible_expenses);
    let property_tax = Checkout.store(Analysis.fixed_expenses.tax);
    let insurance = Checkout.store(Analysis.fixed_expenses.insurance);
    
    //FORMULAS
    let periodic_rate = Math.pow((1 + interest_rate / 12), 360)
    let denominatorA = periodic_rate - 1;
    let denominatorB = interest_rate / 12 * periodic_rate;
    let mortgage = (loan_amount / (denominatorA / denominatorB));
    let total_monthly_expenses = total_fixed_expenses + total_varible_expenses + mortgage;
</script>
<section class="expenses">
    <section class="overview">
        <h2>Monthly Expenses Breakdown</h2>
        <div class="items breakdown-section">
            <h3 class="section-title">Total Expenses</h3>
            <h3 class="items-amount">${total_monthly_expenses.toFixed(2)}</h3>
        </div>
    
        <div class="items">
            <h3 class="items-title">Mortgage</h3>
            <h3 class="items-amount">${mortgage.toFixed(2)}</h3>
        </div>
        <div class="items">
            <h3 class="items-title">Taxes</h3>
            <h3 class="items-amount">${property_tax}</h3>
        </div>
        <div class="items">
            <h3 class="items-title">Insurance</h3>
            <h3 class="items-amount">${insurance}</h3>
        </div>
        <div class="items">
            <h3 class="items-title">Varible Expenses</h3>
            <h3 class="items-amount">${total_varible_expenses}</h3>
        </div>
        <div class="items">
            <h3 class="items-title">Fixed Expenses</h3>
            <h3 class="items-amount">${total_fixed_expenses}</h3>
        </div>
    </section>
    <section class="overview">
        <div class="items breakdown-section">
            <h3 class="section-title">Fixed Expenses</h3>
            <h3 class="items-amount">${total_fixed_expenses}</h3>
        </div>
    
        <div class="items">
            <h3 class="items-title">Electricity</h3>
            <h3 class="items-amount">${Checkout.store(Analysis.fixed_expenses.electricity)}</h3>
        </div>
        <div class="items">
            <h3 class="items-title">Water and Sewer</h3>
            <h3 class="items-amount">${Checkout.store(Analysis.fixed_expenses.water)}</h3>
        </div>
        <div class="items">
            <h3 class="items-title">Gas</h3>
            <h3 class="items-amount">${Checkout.store(Analysis.fixed_expenses.gas)}</h3>
        </div>
        <div class="items">
            <h3 class="items-title">HOA Fees</h3>
            <h3 class="items-amount">${Checkout.store(Analysis.fixed_expenses.hoa)}</h3>
        </div>
        <div class="items">
            <h3 class="items-title">Garbage</h3>
            <h3 class="items-amount">${Checkout.store(Analysis.fixed_expenses.garbage)}</h3>
        </div>
        <div class="items">
            <h3 class="items-title">Other</h3>
            <h3 class="items-amount">${Checkout.store(Analysis.fixed_expenses.other)}</h3>
        </div>
    </section>

    <section class="overview">
        <div class="items breakdown-section">
            <h3 class="section-title">Varible Expenses</h3>
            <h3 class="items-amount">${total_varible_expenses}</h3>
        </div>
    
        <div class="items">
            <h3 class="items-title">Vacany</h3>
            <h3 class="items-amount">${vacancy}</h3>
        </div>
        <div class="items">
            <h3 class="items-title">Capital Expenditure</h3>
            <h3 class="items-amount">${capEx}</h3>
        </div>
        <div class="items">
            <h3 class="items-title">Management</h3>
            <h3 class="items-amount">${management}</h3>
        </div>
        <div class="items">
            <h3 class="items-title">Repairs</h3>
            <h3 class="items-amount">${repairs}</h3>
        </div>
    </section>
</section>

<style>
    h2 {
        text-align: center;
    }
    .overview {
        width: 60vw;
    }

    .items {
        display: flex;
        justify-content: space-between;
        font-size: smaller;
    }

    .breakdown-section {
        margin-block: 1em;
        font-size:large;
        font-weight: bold;
    }
</style>