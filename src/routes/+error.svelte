<script>
	import { page } from '$app/stores';
</script>

<div
	class="min-h-screen flex flex-col items-center justify-center bg-mino-black text-white px-4 text-center"
>
	<h1 class="font-serif text-9xl text-mino-gold opacity-50 mb-4 select-none">404</h1>

	<h2 class="text-2xl font-light uppercase tracking-widest mb-8">Сторінку не знайдено</h2>

	<p class="text-gray-400 max-w-md mb-10 font-light leading-relaxed">
		Схоже, ви заблукали у пошуках краси. <br />
		Сторінка <strong>{$page.url.pathname}</strong> не існує або була переміщена.
	</p>

	<a
		href="/"
		class="inline-block border border-mino-gold text-mino-gold px-8 py-3 text-sm uppercase tracking-widest hover:bg-mino-gold hover:text-mino-black transition-all duration-300"
	>
		На головну
	</a>
</div>
