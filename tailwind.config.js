module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				mezechBlue: '#272262',
				audeoBlue: '#081494',
				lightBlue: '#3DB0FF',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
