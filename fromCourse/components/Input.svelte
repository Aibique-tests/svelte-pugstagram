<script>
    export let name;
</script>

<div class="Input">
    <input name="name" bind:value={name} />
    <p>This paragraph and inputs value are binded => {name}</p>
</div>