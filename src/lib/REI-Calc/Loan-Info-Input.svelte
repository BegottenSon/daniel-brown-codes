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
    <a href="#income">Next: Income</a>
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