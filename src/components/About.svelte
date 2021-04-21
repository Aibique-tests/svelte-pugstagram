<script>
    let innerText = 'and I am a variable'
    let count = 0;

    function handleClick(){
        if(count === 11){
            return count
        }
        count +=1;
    }
</script>

<style>
    .about{
        color: var(--brand-color) ;
    }
</style>

<div class="about">
    <p> I look like a simple text, but I am a component {innerText}</p>
    <button on:click={handleClick} > Click me {count === 0 ?'' :count}</button>
</div>