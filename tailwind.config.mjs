/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'ncafa': "linear-gradient(to bottom,#078193 10%,#2e4696 90%)",
				'ncafa-2': "linear-gradient(90deg, rgba(187,215,115,1) 0%, rgba(86,182,74,1) 84%);",
				'ncafa-3': "linear-gradient(180deg, rgba(187,215,115,1) 0%, rgba(30,120,180,1) 84%);",
				'ncafa-4': "linear-gradient(90deg, rgba(187,215,115,1) 2%, rgba(86,182,74,1) 25%);",
			}
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["light"],
	  },
	
}
