/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Use 'Roboto' as the default sans-serif font
      },
    },
  },
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  plugins: [],
};
