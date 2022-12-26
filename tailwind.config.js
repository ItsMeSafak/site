/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js,ts,jsx,tsx,css,scss,sass,less,styl}',
    './components/**/*.{html,js,ts,jsx,tsx,css,scss,sass,less,styl}',],
  theme: {
    extend: {
      screens: {
        'dark': {'raw': '(prefers-color-scheme: dark)'},
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'blue': '#1890ff'
    }
  },
  plugins: [],
}
