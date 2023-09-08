/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'custom-voilet':'hsl(278, 68%, 11%)'
      },      screens: {
        'lg': '375px',
        // => @media (min-width: 992px) { ... }
    },}
  },
  plugins: [],
}

