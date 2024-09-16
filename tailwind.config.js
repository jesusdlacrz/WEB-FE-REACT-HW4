/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'custom-yellow': '#fcbf65',
        'rojojunior': '#C60428',
        'azuljunior': '#010f29',
        'azuloscuro': '#00081b',
        'azulclaro': '#121f38',
      },
    },
  },
  plugins: [],
}
