import typographyPlugin from '@tailwindcss/typography'

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	plugins: [typographyPlugin],
	theme: {
		colors: {
			current: 'currentColor',
			'off-white': '#FDFFFC',
			'off-white-transparent': 'rgba(253, 255, 252, 0.2)',
			'off-black': '#040403',
			'off-black-transparent': 'rgba(4, 4, 3, 0.60)',
			'blue-highlight': '#45CAFF',
			'purple-highlight': '#826AED',
			'red-highlight': '#C42021',
		},
		extend: {
			spacing: {
				'0i': '0px !important',
			},
			maxWidth: {
				'8xl': '88rem',
				'9xl': '96rem',
			},
		}
	}
};
