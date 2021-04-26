<script>
	import About from './components/About'
	import Text from './components/Text'
	import Person from './components/Person'
	import Skills from './components/Skills'
	import Input from './components/Input'
    import Photos from './components/Photos.svelte';
	import ButtonCount from './components/ButtonCount'

	export let name;
	export let lastName;
	let svelteUrl = 'https://www.notion.so/Svelte-4f5e623579124a9cb7322b86bb2f068f#855a78e211d948bd8a93ba551853e43a'

	const data = { name: 'Toni', lastName: 'loco', age:'22'};
</script>

<style>
	:global(:root){
		--brand-color: #DD65DD;
		--brand-color-bg: #1E2021;
	}
	:global(body.dark-mode){
		background-color: #bfc2c7;
		color: #1e2021;
	}
	:global(body){
		background-color: var(--brand-color-bg);
		color: #bfc2c7;
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
	.svelte-link{
		color: '#66B2F0';
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<main>
	<h1>Hello {name} {lastName}!</h1>
	<About />
	<Text innerText="No default"/>
	<Text/>
	<ButtonCount/>
	<Person {...data} />
	<Photos/>
	<Skills/>
	<Input name="Default" />
	<p>Visit the <a class="svelte-link" href={svelteUrl}>Svelte Notion notes</a> to learn how to build Svelte apps.</p>
</main>