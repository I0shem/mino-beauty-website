<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	let heroTitle, heroSubtitle, heroBtn;

	onMount(() => {
		const tl = gsap.timeline();
		tl.from(heroTitle, { y: 60, opacity: 0, duration: 1.2, ease: 'power3.out' })
			.from(heroSubtitle, { y: 30, opacity: 0, duration: 1, delay: -0.8 })
			.from(heroBtn, { y: 20, opacity: 0, duration: 0.8, delay: -0.6 });
	});
</script>

<section class="relative h-screen flex items-center justify-center overflow-hidden">
	<div class="absolute inset-0 bg-hero-pattern bg-cover bg-center bg-no-repeat fixed-bg">
		<div class="absolute inset-0 bg-black/50 dark:bg-[#121212]"></div>
	</div>

	<div class="relative z-10 text-center text-white px-4 max-w-4xl">
		<h1
			bind:this={heroTitle}
			class="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight"
		>
			Мистецтво <span class="italic text-mino-gold">Краси</span>
		</h1>
		<p
			bind:this={heroSubtitle}
			class="text-lg md:text-xl font-light tracking-wider mb-10 max-w-xl mx-auto opacity-90"
		>
			Мінімалізм. Естетика. Досконалість у кожній деталі вашого образу.
		</p>
		<div bind:this={heroBtn}>
			<a
				href="https://alteg.io"
				class="inline-block border border-white text-white px-10 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-mino-black transition-all duration-300"
			>
				Онлайн запис
			</a>
		</div>
	</div>
</section>

<style>
	.fixed-bg {
		background-attachment: fixed;
	}
	@media (max-width: 768px) {
		.fixed-bg {
			background-attachment: scroll;
		}
	}
</style>
