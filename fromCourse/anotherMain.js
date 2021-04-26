import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Cristofher',
		lastName: 'Jimenez'
	}
});

export default app;