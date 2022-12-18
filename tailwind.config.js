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
      'primary': '#101214',
      'secondary': '#404040',
      'surface': '#f3f3e8',
    }
  },
  plugins: [],
}
