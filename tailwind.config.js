/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				inter: "'Inter', sans-serif",
			},
			colors: {
				black: "#000000",
				gray50: "#E8E8E8",
				gray200: "#5D5D5D",
				gray100: "#929292",
				primaryBlue: "#169DD7",
				red: "#E27D7D",
				lightBlue: "#ACE8F9",
				lightBlue50: "#D1E2E9",
				red10: "#FFD3D6",
			},
		},
	},
	plugins: [],
};
