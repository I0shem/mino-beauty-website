<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	/** @type {any} */
	let heroTitle = null;
	/** @type {any} */
	let heroSubtitle = null;
	/** @type {any} */
	let heroBtn = null;

	onMount(() => {
		const tl = gsap.timeline();
		tl.from(heroTitle, { y: 60, opacity: 0, duration: 1.2, ease: 'power3.out' })
			.from(heroSubtitle, { y: 30, opacity: 0, duration: 1, delay: -0.8 })
			.from(heroBtn, { y: 20, opacity: 0, duration: 0.8, delay: -0.6 });
	});
</script>

<section
	class="relative h-screen flex items-center justify-center overflow-hidden transition-colors duration-500"
>
	<div class="absolute inset-0 animate-gradient transition-opacity duration-500">
		<div class="absolute inset-0 bg-white/30 dark:bg-black/20 transition-colors duration-500"></div>
	</div>

	<div class="relative z-10 text-center px-4 max-w-4xl">
		<h1
			bind:this={heroTitle}
			class="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight drop-shadow-sm text-mino-black dark:text-white transition-colors duration-300"
		>
			Мистецтво <span class="italic text-mino-gold">Краси</span>
		</h1>

		<p
			bind:this={heroSubtitle}
			class="text-lg md:text-xl font-light tracking-wider mb-10 max-w-xl mx-auto opacity-90 text-gray-800 dark:text-gray-200 transition-colors duration-300"
		>
			Мінімалізм. Естетика. Досконалість у кожній деталі вашого образу.
		</p>

		<div bind:this={heroBtn}>
			<a
				href="https://www.instagram.com/ua.mino/"
				class="
        inline-block px-10 py-3 text-sm uppercase tracking-widest transition-all duration-300 backdrop-blur-sm border
        
        border-mino-black text-mino-black hover:bg-mino-black hover:text-white
        dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-mino-black
      "
			>
				Онлайн запис
			</a>
		</div>
	</div>
</section>

<style>
	/* Анімований градієнт */
	.animate-gradient {
		background-size: 400% 400%;
		animation: gradientBG 15s ease infinite;

		/* СВІТЛА ТЕМА (За замовчуванням): Перлинно-сірий градієнт */
		background-image: linear-gradient(-45deg, #f3f4f6, #ffffff, #e5e7eb, #f9fafb);
	}

	/* ТЕМНА ТЕМА: Глибокий чорний градієнт */
	/* Використовуємо :global(html.dark), щоб зловити перемикання теми */
	:global(html.dark) .animate-gradient {
		background-image: linear-gradient(-45deg, #000000, #1a1a1a, #0f0f0f, #241f1c);
	}

	@keyframes gradientBG {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>
