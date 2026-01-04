<script>
	import { Instagram, Facebook, Phone, Mail, MapPin, ArrowUp } from 'lucide-svelte';

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
</script>

<footer
	id="footer"
	class="bg-mino-black text-white pt-24 pb-10 dark:bg-[#121212] transition-colors duration-300"
>
	<div class="container mx-auto px-6">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
			<div class="text-center md:text-left">
				<a
					href="/"
					class="text-3xl font-serif font-bold tracking-widest mb-6 block text-white hover:text-mino-gold transition-colors"
				>
					MINO
				</a>
				<p class="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0 font-light">
					Простір естетики та краси. <br />
					Ми створюємо досконалість у деталях.
				</p>
			</div>

			<div class="text-center">
				<h4 class="font-serif text-xl mb-6 text-mino-gold">Меню</h4>
				<ul class="space-y-4 text-sm uppercase tracking-wider text-gray-300">
					<li><a href="#services" class="hover:text-white transition-colors">Послуги</a></li>
					<li><a href="#portfolio" class="hover:text-white transition-colors">Результати</a></li>
					<li><a href="#about" class="hover:text-white transition-colors">Про нас</a></li>
					<li><a href="https://alteg.io" class="hover:text-white transition-colors">Запис</a></li>
				</ul>
			</div>

			<div class="flex flex-col items-center md:items-start gap-5 text-gray-300">
				<h4 class="font-serif text-xl mb-2 text-mino-gold">Контакти</h4>

				<a
					href="tel:+380990000000"
					class="flex items-center gap-4 hover:text-white transition-colors group"
				>
					<div
						class="p-2 border border-gray-700 rounded-full group-hover:border-mino-gold transition-colors"
					>
						<Phone size={16} />
					</div>
					<span>+38 (099) 000 00 00</span>
				</a>

				<a
					href="mailto:info@mino.ua"
					class="flex items-center gap-4 hover:text-white transition-colors group"
				>
					<div
						class="p-2 border border-gray-700 rounded-full group-hover:border-mino-gold transition-colors"
					>
						<Mail size={16} />
					</div>
					<span>info@mino.ua</span>
				</a>

				<div class="flex items-center gap-4 group">
					<div
						class="p-2 border border-gray-700 rounded-full group-hover:border-mino-gold transition-colors"
					>
						<MapPin size={16} />
					</div>
					<span>м. Вінниця, Немирівське шосе, 94Е</span>
				</div>

				<div class="flex gap-4 mt-4">
					<a
						href="https://www.instagram.com/ua.mino/"
						target="_blank"
						class="p-2 bg-white text-black hover:bg-mino-gold transition-colors rounded-full"
					>
						<Instagram size={20} />
					</a>
					<a
						href="https://facebook.com"
						target="_blank"
						class="p-2 bg-white text-black hover:bg-mino-gold transition-colors rounded-full"
					>
						<Facebook size={20} />
					</a>
				</div>
			</div>
		</div>

		<div
			class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-300 uppercase tracking-wider"
		>
			<p>&copy; 2026 MINO Beauty Space. All rights reserved.</p>

			<button
				on:click={scrollToTop}
				class="flex items-center gap-2 mt-4 md:mt-0 hover:text-mino-gold transition-colors cursor-pointer"
			>
				Вгору <ArrowUp size={14} />
			</button>
		</div>
	</div>
</footer>
