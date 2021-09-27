<script>
    import { address, city, state, zipcode } from "./calc-store";
</script>
<h2>Property Location and Information</h2>
<section class="property-location">
    <label for="address">Address:</label>
    <input type="text" name="address" bind:value={$address}>

    <label for="city">City:</label>
    <input type="text" name="city" bind:value={$city}>

    <label for="state">State:</label>
    <input type="text" name="state" bind:value={$state}>

    <label for="zipcode">Zipcode:</label>
    <input type="text" name="zipcode" bind:value={$zipcode}>
</section>
<a href="#purchase">Next: Purchase</a>