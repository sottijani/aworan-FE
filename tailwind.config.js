/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			"10": "repeat(10, minmax(0, 1fr))",
		},
	},
	plugins: [],
};
