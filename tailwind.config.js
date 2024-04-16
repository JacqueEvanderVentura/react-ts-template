/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['ABeeZee', 'sans-serif', 'ui-sans-serif'],
		  'serif':['Advent Pro', 'serif', 'ui-serif'],
		  'display':['Alegreya Sans SC', 'serif']
      },
		fontSize: {
        'custom': 'var(--custom-text-size)',
      },
    },
  },
  plugins: [],
};
