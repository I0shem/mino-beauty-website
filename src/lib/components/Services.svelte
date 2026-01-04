<script>
	// Тут можна буде легко змінити ціни
	const services = [
		{ name: 'Жіноча стрижка (комплекс)', price: '800 ₴' },
		{ name: 'Укладка волосся (денна)', price: '500 ₴' },
		{ name: 'Вечірній макіяж', price: '1200 ₴' },
		{ name: 'Догляд за обличчям (SPA)', price: '1500 ₴' },
		{ name: 'Манікюр + покриття', price: '750 ₴' },
		{ name: 'Корекція брів', price: '400 ₴' }
	];
</script>

<section id="services" class="py-24 bg-white dark:bg-mino-black transition-colors duration-300">
	<div class="container mx-auto px-6 max-w-4xl">
		<div class="text-center mb-16">
			<h2 class="font-serif text-4xl text-mino-black dark:text-white mb-4 transition-colors">
				Наші Послуги
			</h2>
			<div class="w-16 h-0.5 bg-mino-gold mx-auto"></div>
		</div>

		<div class="space-y-8">
			{#each services as service}
				<div class="flex items-end justify-between group cursor-pointer">
					<span
						class="font-medium text-lg text-mino-black dark:text-gray-200 group-hover:text-mino-gold transition-colors duration-300 relative z-10 bg-white dark:bg-mino-black pr-4"
					>
						{service.name}
					</span>

					<div
						class="flex-grow border-b-2 border-dotted border-gray-200 dark:border-gray-800 mb-1.5 mx-2 group-hover:border-mino-gold transition-colors duration-300"
					></div>

					<span class="font-serif text-xl font-bold text-mino-gold pl-4 relative z-10">
						{service.price}
					</span>
				</div>
			{/each}
		</div>

		<div class="text-center mt-12">
			<a
				href="https://alteg.io"
				class="text-sm dark:text-sm-white underline underline-offset-4 text-gray-500 hover:text-mino-gold transition-colors"
				>Переглянути повний прайс</a
			>
		</div>
	</div>
</section>
