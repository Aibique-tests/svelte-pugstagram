

<script>
    let skills = [{id:1, name: 'HTML'},{id:2, name:'CSS'}, {id:3, name:'JS'}]
</script>

<style>
li{
    list-style:none;
    display: inline;
}
</style>

<div class="Skills">
    <h3>Skills</h3>
    <ul>
        {#each skills as skill, i}
        <li > skill.name</li>
        {/each}
    </ul>
</div>