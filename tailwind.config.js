/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      white: "hsl(0, 0%, 100%)",
      "dark-blue": "hsl(209, 23%, 22%)",
      "very-dark-blue": "hsl(207, 26%, 17%)",
      "very-dark-blue2": "hsl(200, 15%, 8%)",
      "dark-gray": "hsl(0, 0%, 52%)",
      "very-light-gray": "hsl(0, 0%, 98%)",
      transparent: "transparent",
    },
  },
  plugins: [],
};
