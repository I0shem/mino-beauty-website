<script>
	import { onMount } from 'svelte';
	import { Menu, X } from 'lucide-svelte';
	import { fade } from 'svelte/transition';
	import ThemeToggle from './ThemeToggle.svelte';

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
		{ id: 1, name: 'Послуги', link: '#services' },
		{ id: 2, name: 'Результати', link: '#portfolio' },
		{ id: 3, name: 'Майстри', link: '#team' },
		{ id: 4, name: 'Філософія', link: '#about' },
		{ id: 5, name: 'Контакти', link: '#footer' }
	];
</script>

<header
	class="fixed top-0 left-0 w-full z-50 transition-all duration-300
    {isScrolled || isMobileMenuOpen
		? 'bg-white/90 dark:bg-mino-black/90 backdrop-blur-md shadow-sm py-3'
		: 'bg-transparent py-6'}
    text-mino-black dark:text-white"
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
			{#each menuItems as item (item.id)}
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

			<div class="border-l border-gray-300 dark:border-gray-700 pl-4 transition-colors">
				<ThemeToggle />
			</div>

			<a
				href="https://www.instagram.com/ua.mino/"
				target="_blank"
				class="
        bg-mino-gold text-white px-6 py-2 text-xs font-bold uppercase tracking-widest transition-colors duration-300
        hover:bg-mino-black dark:hover:bg-white dark:hover:text-mino-black
      "
			>
				Записатись
			</a>
		</nav>

		<div class="flex items-center gap-4 md:hidden">
			<ThemeToggle />

			<button class="z-50 focus:outline-none" on:click={toggleMenu} aria-label="Меню">
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
		class="fixed inset-0 bg-white dark:bg-mino-black z-40 flex flex-col items-center justify-center md:hidden transition-colors duration-300"
	>
		<nav class="flex flex-col items-center gap-8 text-xl text-mino-black dark:text-white">
			{#each menuItems as item (item.name)}
				<a
					href={item.link}
					on:click={closeMenu}
					class="font-serif text-2xl hover:text-mino-gold transition-colors"
				>
					{item.name}
				</a>
			{/each}

			<a
				href="https://www.instagram.com/ua.mino/"
				target="_blank"
				class="mt-4 text-sm uppercase tracking-widest font-bold bg-mino-gold text-white px-8 py-3 hover:bg-black transition-colors"
			>
				Онлайн запис
			</a>
		</nav>
	</div>
{/if}
