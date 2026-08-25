<script>
	import { onMount } from 'svelte';
	import { ArrowUp } from 'lucide-svelte';
	import { fade, fly } from 'svelte/transition';

	let showButton = false;

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	onMount(() => {
		const handleScroll = () => {
			showButton = window.scrollY > 300;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

{#if showButton}
	<button
		on:click={scrollToTop}
		transition:fly={{ y: 20, duration: 300 }}
		class="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-mino-gold text-white shadow-lg hover:bg-white hover:text-mino-gold border border-transparent hover:border-mino-gold transition-all duration-300 transform hover:-translate-y-1 group"
		aria-label="Вгору"
	>
		<ArrowUp size={24} strokeWidth={2} />
	</button>
{/if}
