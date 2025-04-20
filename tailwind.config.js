/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cairo', 'sans-serif'],
      },
      screens: {
        'xs': '375px', // Extra small devices
      },
      transitionDuration: {
        '400': '400ms',
        '800': '800ms',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}