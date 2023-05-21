/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/*.{html,js,css,tsx}'
  ],
  theme: {
    backgroundImage:
    {
      "background": "linear-gradient(90deg, rgba(6,27,14,1) 0%, rgba(6,4,32,1) 100%)"
    },
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}

