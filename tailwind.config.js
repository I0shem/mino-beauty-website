/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'mino-black': '#1a1a1a',
				'mino-gold': '#D4AF37',
				'mino-bg': '#ffffff'
			},
			fontFamily: {
				serif: ['"Playfair Display"', 'serif'],
				sans: ['Montserrat', 'sans-serif']
			},
			backgroundImage: {
				'hero-pattern':
					"url('https://images.unsplash.com/photo-1600334019640-ebc345c3c13e?q=80&w=2070&auto=format&fit=crop')"
			}
		}
	},
	plugins: []
};
