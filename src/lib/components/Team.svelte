<script>
	import nika from '../assets/nika.jpg';
	import victoria from '../assets/victoria.png';
	import diana from '../assets/diana.jpg';
	// Дані ваших майстрів. Ви можете легко змінювати текст та додавати нових.
	const team = [
		{
			id: 1,
			name: 'Діана',
			role: 'Майстер манікюру',
			description: `Досвід. Естетика. Досконалість. ✨

Знайомтеся, наш майстер манікюру — фахівець із 5-річним досвідом, який перетворив догляд за руками на справжнє мистецтво. Вона філігранно поєднує бездоганну техніку, архітектурно правильні форми та актуальні тенденції нігтьової естетики 💅

Її підхід — це завжди про безкомпромісну якість та глибоку повагу до кожного клієнта.

Що ви отримуєте:
▫️ абсолютну стерильність та безпеку;
▫️ ідеальну чистоту манікюру;
▫️ преміальні матеріали, підібрані під ваш тип нігтів;
▫️ стійке та тонке покриття без зайвого об'єму.

Кожна її робота — це продумана деталь вашого образу, яка не лише притягує погляди, а й дарує абсолютний комфорт 🫶`,
			image: diana
		},
		{
			id: 2,
			name: 'Ніка',
			role: 'Майстер-бровист',
			description: `Знайомтеся — наша майстриня Ніка ❣️

Має високі знання у курсі моделювання та фарбування брів і впевнено застосовує всі знання на практиці 🤍

І ми щиро пишаємося її результатами!
Вона показує себе як дуже уважний, акуратний і талановитий майстер.

Ніка — це про:
▫️ натуральну форму брів
▫️ чисту та делікатну роботу
▫️ комфорт під час процедури
▫️ любов до деталей і до кожного клієнта

Вона постійно старається, та працює на результат, який тішить вас щодня.`,
			image: nika
		},
		{
			id: 3,
			name: 'Вікторія',
			role: 'Майстер стрижки',
			description: `Стрижка — це не просто про волосся.
Це про впевненість, стиль і відчуття себе ✂️✨

Познайомтесь ближче з нашим майстром Вікторією — спеціалістом, який професійно виконує чоловічі та дитячі стрижки 💈

✔️ індивідуальний підхід до кожного
✔️ акуратність та увага до деталей
✔️ сучасні техніки та стильні форми
✔️ комфортна атмосфера для дорослих і дітей

Для нас важливо, щоб кожен клієнт виходив не просто зі стрижкою, а з хорошим настроєм та впевненістю в собі 🤍

Запрошуємо на знайомство та оновлення образу з Вікторією!`,
			image: victoria
		}
	];
</script>

<section id="team" class="py-24 bg-white dark:bg-mino-black transition-colors duration-500">
	<div class="container mx-auto px-4 md:px-6 max-w-7xl">
		<!-- Заголовок секції -->
		<div class="text-center mb-16">
			<h2
				class="font-serif text-4xl md:text-5xl text-mino-black dark:text-white mb-4 transition-colors"
			>
				Наші <span class="italic text-mino-gold">Майстри</span>
			</h2>
			<div class="w-16 h-px bg-mino-gold mx-auto mb-6"></div>
			<p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light transition-colors">
				Команда професіоналів, які поділяють філософію досконалості та естетики.
			</p>
		</div>

		<!-- Сітка майстрів -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
			{#each team as member (member.id)}
				<div class="group cursor-pointer">
					<!-- Блок з фото -->
					<div class="relative overflow-hidden mb-6 aspect-[3/4]">
						<img
							src={member.image}
							alt={member.name}
							class="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
						/>
						<!-- Легке затемнення, яке зникає при наведенні -->
						<div
							class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"
						></div>
					</div>

					<!-- Блок з текстом -->
					<div class="text-center">
						<h3 class="text-2xl font-serif text-mino-black dark:text-white mb-1 transition-colors">
							{member.name}
						</h3>
						<p class="text-mino-gold text-sm uppercase tracking-widest mb-4">
							{member.role}
						</p>
						<p
							class="text-gray-600 dark:text-gray-400 text-sm font-light leading-relaxed transition-colors px-4 whitespace-pre-line text-left"
						>
							{member.description}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
