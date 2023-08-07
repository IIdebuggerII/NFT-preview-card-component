/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'DarkBlue':'hsl(216, 50%, 16%)',
        'SoftBlue':'hsl(215, 51%, 70%)',
        'HardBlue': 'hsl(215, 52%, 25%)',
        'Cyan':'hsl(178, 100%, 50%)'
      }
    },
  },
  plugins: [],
}