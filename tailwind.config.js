/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#356B4C',
        danger: '#FF0000',
        black: '#3a3a3a'
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"]
      }
    },
  },
  plugins: [],
}