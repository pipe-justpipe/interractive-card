/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'custom-voilet':'hsl(278, 68%, 11%)'
      },  
    },
  },    screens: {
    'sm': '1000px', // Change this value to my desired width
  },

  plugins: [],
}

