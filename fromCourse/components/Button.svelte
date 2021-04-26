<script>
    export let count = 0;
    export let text;
    export let onClick;
</script>

<button class="Button" on:click={onClick}>
    {text} {count === 0 ?'' :count}
</button>