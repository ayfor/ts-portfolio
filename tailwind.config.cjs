const defaultTheme = require("tailwindcss/defaultTheme");
import typographyPlugin from '@tailwindcss/typography'

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,ttf}"],
	plugins: [typographyPlugin],
	theme: {
		colors: {
			current: 'currentColor',
			'off-white': '#FDFFFC',
			'off-white-transparent': 'rgba(253, 255, 252, 0.1)',
			'off-white-transparent-dark': 'rgba(253, 255, 252, 0.3)',
			'off-black': '#040403',
			'off-black-transparent': 'rgba(4, 4, 3, 0.4)',
			'off-black-transparent-dark': 'rgba(4, 4, 3, 0.6)',
			'blue-highlight': '#45CAFF',
			'purple-highlight': '#826AED',
			'red-highlight': '#C42021',
		},
		extend: {
			fontFamily: {
				display: ["Rubik"],
				sans: ["Rubik", ...defaultTheme.fontFamily.sans],
			},
			spacing: {
				'1/20': '5%',
				'1/10': '10%',
				'0i': '0px !important',
				'84': '21rem',
				'88': '22rem',
				'100': '25rem',
				'112': '28rem',
				'128': '32rem',
				'144': '36rem',
				'152': '38rem',
				'160': '40rem',
			},
			maxWidth: {
				'8xl': '88rem',
				'9xl': '96rem',
			},
			fontSize: {
				'3.5xl': '2rem',
				'3.75xl': '2.15rem',
			},
			animation: {
				'fade-in': 'fadeIn 0.5s ease-in-out',
        'spin-slow': 'spin 3s linear infinite',
        'spin-xslow': 'spin 6s linear infinite',
			},
			screens: {
				'multi-col': '1380px',
				'wide': '1800px',
				'ultra-wide': '2000px',
			},
		}
	}
};
