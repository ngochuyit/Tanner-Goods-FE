/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      transitionProperty: {
        'smooth': 'var(--smooth)',
      },
      fontFamily :{
        montserrat: "'Montserrat', serif",
      },
     
      backgroundImage: {
        'pr-4': "url('./asset/product-05.jpg')",
       
      }
    },

  },
  plugins: [],
}