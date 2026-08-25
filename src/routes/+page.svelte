<script>
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Services from '$lib/components/Services.svelte';
	import Portfolio from '$lib/components/Portfolio.svelte';
	import About from '$lib/components/About.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import Team from '$lib/components/Team.svelte';
</script>

<Header />

<main>
	<Hero />
	<Reveal><Services /></Reveal>
	<Reveal><Portfolio /></Reveal>
	<Reveal><Team /></Reveal>
	<Reveal><About /></Reveal>
</main>

<Footer />

<ScrollToTop />
