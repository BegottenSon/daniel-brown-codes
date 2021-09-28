<script>
    import { address, city, state, zipcode } from "./calc-store";
</script>
<h2>Property Location and Information</h2>
<section class="property-location">
    <label for="address">Address:</label>
    <input type="text" name="address" bind:value={$address} placeholder="Add address of property of interest">

    <label for="city">City:</label>
    <input type="text" name="city" bind:value={$city} placeholder="City">

    <label for="state">State:</label>
    <input type="text" name="state" bind:value={$state} placeholder="State">

    <label for="zipcode">Zipcode:</label>
    <input type="text" name="zipcode" bind:value={$zipcode} placeholder="Zipcode">
    <a href="#purchase">Next: Purchase</a>
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
        max-width: 64ch;
    }

    a {
        align-self: flex-end;
        background-color: var(--accent);
        border-radius: 4px;
        margin: 1em;
        padding: 0.6em;
        text-decoration: none;
    }
</style>