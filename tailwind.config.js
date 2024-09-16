/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.htm",
    "js/**/*.js",
    "css/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        'card-header': 'rgb(48 11 96)',
        'card-footer': 'rgb(74 33 130)',
        'card-border': 'rgb(162 113 242)',
        'txtclr' : '#334155',
        'mobMenuTxt' : '#300B60'
      },
    },
  },
  plugins: [],
}

