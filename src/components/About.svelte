<script>
    import Button from './Button'

    let innerText = 'and I am a variable'
    let count = 0;
    let styles = {darkMode: false};

    function handleClick(){
        if(count === 11){
            return count
        }
        count +=1;
    }
    function toggle(){
        styles.darkMode = !styles.darkMode;
        window.document.body.classList.toggle('dark-mode');

    }
</script>

<style>
    .about{
        color: var(--brand-color) ;
    }
</style>

<div class="about">
    <p> I look like a simple text, but I am a component {innerText}</p>
    <p>
        {#if !styles.darkMode}
        <span>LightMode</span>
        {:else}
        <span>Darkmode</span>
        {/if}
    </p>
    <Button onClick={handleClick} text="Count:" {count} />
    <Button onClick={toggle} text="DarkMode"/>
    
    <button on:click={handleClick} > Click me {count === 0 ?'' :count}</button>
    <button on:click={toggle} > Switcher </button>
</div>