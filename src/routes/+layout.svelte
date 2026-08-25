<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import MinoBeautyStudio from '../lib/assets/mino-beauty studio.png';

	onMount(() => {
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

	<title>MINO</title>
	<meta
		name="description"
		content="Салон краси MINO. Естетика мінімалізму та досконалість у кожній деталі."
	/>

	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://mino.in.ua" />
	<meta property="og:title" content="MINO | Beauty Studio" />
	<meta property="og:description" content="Створіть свій ідеальний образ. Онлайн запис." />
	<meta property="og:image" content={MinoBeautyStudio} />

	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://mino.in.ua" />
	<meta property="twitter:title" content="MINO | Beauty Studio" />
	<meta property="twitter:description" content="Створіть свій ідеальний образ. Онлайн запис." />
	<meta property="twitter:image" content={MinoBeautyStudio} />
</svelte:head>

<slot />
