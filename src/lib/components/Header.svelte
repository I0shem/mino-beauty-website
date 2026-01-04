<script>
	import { onMount } from 'svelte';
	import { Menu, X } from 'lucide-svelte';
	import { fade } from 'svelte/transition';
	import ThemeToggle from './ThemeToggle.svelte'; // Імпортуємо перемикач

	let isScrolled = false;
	let isMobileMenuOpen = false;

	onMount(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 50;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	const toggleMenu = () => {
		isMobileMenuOpen = !isMobileMenuOpen;
		document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
	};

	const closeMenu = () => {
		isMobileMenuOpen = false;
		document.body.style.overflow = 'auto';
	};

	const menuItems = [
		{ name: 'Послуги', link: '#services' },
		{ name: 'Результати', link: '#portfolio' },
		{ name: 'Філософія', link: '#about' },
		{ name: 'Контакти', link: '#footer' }
	];
</script>

<header
	class="fixed top-0 left-0 w-full z-50 transition-all duration-300 {isScrolled || isMobileMenuOpen
		? 'bg-white/95 dark:bg-mino-black/95 backdrop-blur-md shadow-sm py-3 text-mino-black dark:text-white'
		: 'bg-transparent py-6 text-white'}"
>
	<div class="container mx-auto px-6 flex justify-between items-center">
		<a
			href="/"
			class="text-2xl font-serif font-bold tracking-widest hover:text-mino-gold transition-colors z-50 relative"
			on:click={closeMenu}
		>
			MINO
		</a>

		<nav class="hidden md:flex gap-8 items-center">
			{#each menuItems as item}
				<a
					href={item.link}
					class="text-sm uppercase tracking-wide font-medium hover:text-mino-gold transition-colors relative group"
				>
					{item.name}
					<span
						class="absolute -bottom-1 left-0 w-0 h-0.5 bg-mino-gold transition-all duration-300 group-hover:w-full"
					></span>
				</a>
			{/each}

			<div class="border-l border-gray-300 dark:border-gray-700 pl-4">
				<ThemeToggle />
			</div>

			<a
				href="https://alteg.io"
				target="_blank"
				class="bg-mino-gold text-white px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-black dark:hover:bg-white dark:hover:text-black transition-colors duration-300"
			>
				Записатись
			</a>
		</nav>

		<div class="flex items-center gap-2 md:hidden">
			<ThemeToggle />
			<button class="z-50 focus:outline-none ml-2" on:click={toggleMenu}>
				{#if isMobileMenuOpen}
					<X size={28} />
				{:else}
					<Menu size={28} />
				{/if}
			</button>
		</div>
	</div>
</header>

{#if isMobileMenuOpen}
	<div
		transition:fade={{ duration: 200 }}
		class="fixed inset-0 bg-white dark:bg-mino-black z-40 flex flex-col items-center justify-center md:hidden text-mino-black dark:text-white"
	>
		<nav class="flex flex-col items-center gap-8 text-xl">
			{#each menuItems as item}
				<a
					href={item.link}
					on:click={closeMenu}
					class="font-serif text-2xl hover:text-mino-gold transition-colors"
				>
					{item.name}
				</a>
			{/each}

			<a
				href="https://alteg.io"
				target="_blank"
				class="mt-4 text-sm uppercase tracking-widest font-bold bg-mino-gold text-white px-8 py-3 rounded hover:bg-mino-black transition-colors"
			>
				Онлайн запис
			</a>
		</nav>
	</div>
{/if}
