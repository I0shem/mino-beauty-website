<script>
	import { MoveUpRight } from 'lucide-svelte'; // Іконка стрілочки

	const works = [
		{
			id: 1,
			category: 'Вечірній образ',
			title: 'Макіяж та укладка',
			img: 'photo-1487412720507-e7ab37603c6f' // Жінка з макіяжем
		},
		{
			id: 2,
			category: 'Манікюр',
			title: 'Естетика мінімалізму',
			img: 'photo-1626691796468-7d8ae60cb32f' // Руки з манікюром
		},
		{
			id: 3,
			category: 'Стрижка',
			title: 'Геометрія форми',
			img: 'photo-1595476108010-b4d1f102b1b1' // Стрижка боб
		},
		{
			id: 4,
			category: 'Стайлінг брів',
			title: 'Корекція та фарбування',
			img: 'photo-1595550912256-b24059bb08e8' // Брови/Очі
		},
		{
			id: 5,
			category: 'Догляд',
			title: 'Відновлення волосся',
			img: 'photo-1560869713-7d0a29430803' // Волосся
		},
		{
			id: 6,
			category: 'Педикюр',
			title: 'SPA-догляд',
			img: 'photo-1516975080664-ed2fc6a32937' // Ноги/SPA
		}
	];
</script>

<section id="portfolio" class="py-24 bg-gray-50 dark:bg-[#121212] transition-colors duration-300">
	<div class="container mx-auto px-6">
		<div class="text-center mb-16">
			<h2 class="font-serif text-4xl text-mino-black dark:text-white mb-4 transition-colors">
				Наші Роботи
			</h2>
			<p class="text-gray-600 dark:text-white font-light max-w-xl mx-auto">
				Кожен образ — це історія, яку ми створюємо разом з вами.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each works as work}
				<div class="group relative overflow-hidden h-[400px] cursor-pointer">
					<img
						src={`https://images.unsplash.com/${work.img}?w=600&q=80&auto=format&fit=crop`}
						alt={work.title}
						class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
					/>

					<div
						class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6"
					>
						<div
							class="bg-white/95 dark:bg-mino-black/95 backdrop-blur-sm p-8 text-center translate-y-8 group-hover:translate-y-0 transition-transform duration-500 w-full max-w-xs border dark:border-gray-900"
						>
							<span class="text-mino-gold text-xs font-bold uppercase tracking-widest mb-2 block">
								{work.category}
							</span>
							<h3 class="font-serif text-xl text-mino-black dark:text-white mb-4 transition-colors">
								{work.title}
							</h3>

							<div class="flex justify-center">
								<div
									class="p-2 bg-mino-black text-white rounded-full hover:bg-mino-gold transition-colors dark:bg-white dark:text-mino-black dark:hover:bg-mino-gold"
								>
									<MoveUpRight size={16} />
								</div>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<div class="text-center mt-16">
			<a
				href="https://www.instagram.com/ua.mino/"
				target="_blank"
				class="inline-block border border-mino-black dark:border-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-mino-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-mino-black transition-all duration-300"
			>
				Більше в Instagram
			</a>
		</div>
	</div>
</section>
