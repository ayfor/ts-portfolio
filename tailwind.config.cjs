const defaultTheme = require("tailwindcss/defaultTheme");
import typographyPlugin from '@tailwindcss/typography'

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,ttf}", "./node_modules/flowbite/**/*.js"],
	plugins: [typographyPlugin, require('flowbite/plugin')],
	theme: {
		colors: {
			current: 'currentColor',
			'off-white': '#FDFFFC',
			'off-white-transparent-light': 'rgba(253, 255, 252, 0.05)',
			'off-white-transparent': 'rgba(253, 255, 252, 0.1)',
			'off-white-transparent-dark': 'rgba(253, 255, 252, 0.3)',
			'off-black': '#040403',
			'off-black-transparent-ultralight': 'rgba(4, 4, 3, 0.1)',
			'off-black-transparent-light': 'rgba(4, 4, 3, 0.3)',
			'off-black-transparent-regular': 'rgba(4, 4, 3, 0.4)',
			'off-black-transparent-medium': 'rgba(4, 4, 3, 0.5)',
			'off-black-transparent-dark': 'rgba(4, 4, 3, 0.6)',
			'blue-highlight': '#45CAFF',
			'purple-highlight': '#826AED',
			'red-highlight': '#C42021',
			'transparent': 'transparent',
		},
		extend: {
			rotate: {
				'75': '75deg',
				'105': '105deg',
				'135': '135deg',
				'150': '150deg',
				'225': '225deg',
			},
			scale: {
				'112': '1.12',
				'115': '1.15',
			},
			boxShadow: {
				'inner-xl': 'inset 2px 2px 4px 2px rgba(0, 0, 0, 0.02)',
			},
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
			width: {
				'110': '28rem',
				'120': '30rem',
				'128': '32rem',
				'144': '36rem',
				'152': '38rem',
				'160': '40rem',
				'200': '50rem',
			},
			maxWidth: {
				'8xl': '88rem',
				'9xl': '96rem',
			},
			fontSize: {
				'3.5xl': '2rem',
				'3.75xl': '2.15rem',
				'9xl': '7rem',
				'10xl': '8rem',
				'11xl': '9rem',
				'12xl': '10rem',
				'13xl': '11rem',
				'14xl': '12rem',
				'15xl': '13rem',
				'16xl': '14rem',
				'17xl': '15rem',
				'18xl': '16rem',
				'19xl': '17rem',
				'20xl': '18rem'
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
