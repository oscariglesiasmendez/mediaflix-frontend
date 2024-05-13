/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary:{
          50: "#e5e1e7",
          100: "#bdb5c4",
          200: "#91839d",
          300: "#655176",
          400: "#442c58",
          500: "#23073b",
          600: "#1f0635",
          700: "#1a052d",
          800: "#150426",
          900: "#0c0219",
          A100: "#8b58ff",
          A200: "#6825ff",
          A400: "#4a00f1",
          A700: "#4200d7",
        }
      }
    },
  },
  plugins: [],
}

