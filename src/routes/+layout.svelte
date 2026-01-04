<script>
	import '../app.css';
	import { onMount } from 'svelte';

	onMount(() => {
		// Стилізоване повідомлення в консолі
		console.log(
			'%c Developed by I0shem %c https://github.com/I0shem ',
			'background: #2b0505; color: #fff; padding: 5px 10px; border-radius: 4px; font-weight: bold;',
			'background: #1a1a1a; color: #fff; padding: 5px 10px; border-radius: 4px;'
		);
	});
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&family=Playfair+Display:wght@400;600&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<slot />
