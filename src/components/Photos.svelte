<script>
    import { onMount } from 'svelte'

    let photos = []

    onMount(async () => {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=20')
            photos = await response.json()
        }catch(err){
            console.error(err)
        }
    })
</script>

<div class="Potos">
    {#each photos as photo}
    <figure>
        <img src={photo.thumbnailUrl} alt={photo.title}/>
        <figcaption>{photo.title}</figcaption>
    </figure>
    {:else}
    <p>Loading...</p>
    {/each}
</div>