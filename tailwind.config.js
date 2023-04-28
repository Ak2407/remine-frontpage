/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'primary' : '#2DC83C',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      }
    },
   
  },
  plugins: [],
}