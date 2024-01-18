/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        mainColor: '#0A0A09',
        yellow: '#D4CC7B',
        btnbg:'#DBB500',
      },
      padding:{
        big:'50px',
      },
    },
  },
  plugins: [],
}

