const defaultTheme = require("tailwindcss/defaultTheme");
import typographyPlugin from '@tailwindcss/typography';

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,ttf}", "./node_modules/flowbite/**/*.js"],
	plugins: [typographyPlugin, require('@tailwindcss/forms'), require('flowbite/plugin')],
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
			margin: {
				22: '5.5rem',
			},
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
			fontSize: {
				xs: ['0.8125rem', { lineHeight: '1.5rem' }],
				sm: ['0.875rem', { lineHeight: '1.5rem' }],
				base: ['1rem', { lineHeight: '1.75rem' }],
				lg: ['1.125rem', { lineHeight: '1.75rem' }],
				xl: ['1.25rem', { lineHeight: '2rem' }],
				'2xl': ['1.5rem', { lineHeight: '2rem' }],
				'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
				'4xl': ['2rem', { lineHeight: '2.5rem' }],
				'5xl': ['3rem', { lineHeight: '3.5rem' }],
				'6xl': ['3.75rem', { lineHeight: '1' }],
				'7xl': ['4.5rem', { lineHeight: '1' }],
				'8xl': ['6rem', { lineHeight: '1' }],
				'9xl': ['8rem', { lineHeight: '1' }],
				'10xl': ['10rem', { lineHeight: '1' }],
				'11xl': ['12rem', { lineHeight: '1' }],
				'12xl': ['14rem', { lineHeight: '1' }],
				'13xl': ['16rem', { lineHeight: '1' }],
				'14xl': ['18rem', { lineHeight: '1' }],
				'15xl': ['20rem', { lineHeight: '1' }],
				'16xl': ['22rem', { lineHeight: '1' }],
				'17xl': ['24rem', { lineHeight: '1' }],
				'18xl': ['26rem', { lineHeight: '1' }],
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
				'220': '55rem',
				'240': '60rem',
				'256': '64rem',
				'272': '68rem',
				'288': '72rem',
				'320': '80rem',
				'360': '90rem',
			},
			minWidth: {
				'3/10': '30%',
			},
			maxWidth: {
				"3/8": "37.5%",
				'8xl': '88rem',
				'9xl': '96rem',
			},
			animation: {
				'fade-in': 'fadeIn 0.5s ease-in-out',
        'spin-slow': 'spin 3s linear infinite',
        'spin-xslow': 'spin 6s linear infinite',
			},
			screens: {
				'multi-col': '1300px',
				'thin': '1580px',
				'wide': '1800px',
				'ultra-wide': '2000px',
			},
		}
	}
};
