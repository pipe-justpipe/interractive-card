/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'custom-voilet':'hsl(278, 68%, 11%)'
      },  
      backgroundImage: theme => ({
        'background1': "url('../images/bg-main-desktop.png')",
        'background2': "url('../images/bg-main-mobile.png')"
      })
    },
  }, 
  plugins: [],
}

