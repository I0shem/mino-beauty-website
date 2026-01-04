<script>
	import { onMount } from 'svelte';
	import { Sun, Moon } from 'lucide-svelte';

	let isDark = false;

	onMount(() => {
		// Перевіряємо налаштування при завантаженні
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			isDark = true;
			document.documentElement.classList.add('dark');
		} else {
			isDark = false;
			document.documentElement.classList.remove('dark');
		}
	});

	const toggleTheme = () => {
		isDark = !isDark;
		if (isDark) {
			document.documentElement.classList.add('dark');
			localStorage.theme = 'dark';
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.theme = 'light';
		}
	};
</script>

<button
	on:click={toggleTheme}
	class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-mino-black dark:text-mino-gold"
	title="Змінити тему"
>
	{#if isDark}
		<Sun size={20} />
	{:else}
		<Moon size={20} />
	{/if}
</button>
