<script>
	import { onMount } from 'svelte';

	/**
	 * @type {Element}
	 */
	let element;
	let isVisible = false; // Спочатку блок невидимий

	onMount(() => {
		// Створюємо "спостерігача" (браузерна функція)
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						isVisible = true; // Якщо блок видно — показуємо його
						observer.unobserve(entry.target); // І припиняємо стежити (щоб він не блимав туди-сюди)
					}
				});
			},
			{
				threshold: 0.1, // Анімація почнеться, коли 10% блоку з'явиться знизу екрана
				rootMargin: '0px 0px -60px 0px' // Трохи відступу знизу
			}
		);

		if (element) observer.observe(element);

		return () => observer.disconnect();
	});
</script>

<div
	bind:this={element}
	class="transform transition-all duration-1100 ease-out will-change-transform"
	class:opacity-0={!isVisible}
	class:translate-y-16={!isVisible}
	class:opacity-100={isVisible}
	class:translate-y-0={isVisible}
>
	<slot />
</div>
