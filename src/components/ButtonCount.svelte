<script>
    import {count} from '../store/store.js';

    function handleClick(){
        count.update(n => n+1)
    }
</script>

<button on:click={handleClick}>
    Click! {$count === 0 ?'' :$count}
</button>