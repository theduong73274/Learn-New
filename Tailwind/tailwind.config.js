/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./build/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        35: "35px",
      },
      colors: {
        gray33: "#333",
        orangefa: "#ffa400",
      },
    },
  },
  plugins: [],
};
