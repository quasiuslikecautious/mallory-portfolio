import colors from 'tailwindcss/colors'
  
/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

  darkMode: "class",

	theme: {
    extend: {
		  colors: {
        primary: "rgb(var(--color-primary))",
        secondary: "rgb(var(--color-secondary))",
        inverted: "rgb(var(--color-inverted))",
        text: "rgb(var(--color-text-primary))",
        secondaryText: "rgb(var(--color-text-secondary))",
        transparent: "transparent",
        current: "currentColor",
      }
    }
	},

	plugins: [],
};

module.exports = config;
