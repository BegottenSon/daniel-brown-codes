
<script>
    export let selected = "empty";
 
</script>
<!-- svelte-ignore a11y-no-onchange -->
<select name="attributes" id="attributes" bind:value={selected} on:change>
    <option value="empty">Energy Types</option>
    <option value="Amplifies">Amplifies</option>
    <option value="Absorbs">Absorbs</option>
</select>