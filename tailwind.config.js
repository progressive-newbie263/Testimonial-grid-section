/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./*.html"],
  
  theme: {
    colors: {
      lightGray: "hsl(0, 0%, 81%)",
      lightGrayishBlue: "hsl(210, 46%, 95%)",
      white: "hsl(0, 0%, 100%)",
      violet: "hsl(263, 55%, 52%)",
      darkGrayishBlue: "hsl(217, 19%, 35%)",
      darkBlackishBlue: "hsl(219, 29%, 14%)"
    },

    // screens: {
    //   'md': '900px',
    // },

    extend: {},
  },

  plugins: [],
};

