<script>
    import { downPayment, interest, points, loanTerm } from "./calc-store";

</script>

<section id="loan-info">
    <h2>Loan Information</h2>
    <label for="downPayment">Down Payment:</label>
    <input type="number" name="downPayment" bind:value={$downPayment}>

    <label for="interest">Interest:</label>
    <input type="number" name="interest" bind:value={$interest}>

    <label for="points">Loan Points Charged:</label>
    <input type="number" name="points" bind:value={$points}>

    <label for="loanTerm">Loan Term:</label>
    <input type="number" name="loanTerm" bind:value={$loanTerm}>years
</section>

<a href="#income">Next: Income</a>