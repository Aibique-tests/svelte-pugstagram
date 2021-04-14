<script>
	export let name;
	export let lastName;
	let svelteUrl = 'https://svelte.dev/tutorial'
</script>

<main>
	<h1>Hello {name} {lastName}!</h1>
	<p>Visit the <a href={svelteUrl}>Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	:global(:root){
		--brand-color: #DD65DD;
		--brand-color-bg: #1E2021;
	}
	:global(body){
		background-color: var(--brand-color-bg);
	}
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: var(--brand-color);
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
	p{
		color: #f2f2f2;
	}
	p a{
		color: #66B2F0;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>