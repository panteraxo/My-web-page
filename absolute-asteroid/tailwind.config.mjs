/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors:{
				color1:'#5483B3',
				color2:'#7DA0CA',
				color3:'#C1E8FF',
				
			}
		},
	},
	plugins: [],
}
