const monda = ['Monda', 'sans-serif']

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'background': '#101214',
      'primary': '#426E78',
      'primary-variant': '#D9553C',
      'secondary': '#404040',
      'surface': '#F3F3e8',
    },
    fontFamily: {
      'sans': monda, // overwrite default font
      'monda': monda,
      'barcode-text': ['\'Libre Barcode 39 Text\'',  'cursive'], // for some reasons, I needed to add extra apices
    },
  },
  plugins: [],
}
