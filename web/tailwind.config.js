/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'reddit-orange': '#FF4500',
        'reddit-dark': '#1A1A1B',
        'reddit-light': '#EDEFF1',
      }
    },
  },
  plugins: [],
}