/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        mainColor: '#0A0A09',
        yellow: '#D4CC7B',
      },
      padding:{
        big:'50px',
      },
      bg:{
        btnbg:'#DBB500',
      }
    },
  },
  plugins: [],
}

