/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{html,js,ts,jsx,tsx,css,scss,sass,less,styl}',
    './components/**/*.{html,js,ts,jsx,tsx,css,scss,sass,less,styl}',],
  theme: {
    extend: {
      screens: {
        'dark': {'raw': '(prefers-color-scheme: dark)'}
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)'
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: '#1890ff',
      black: {
        DEFAULT: '#1a1a1a',
        200: '#2a2a2a',
      },
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    }
  },
  plugins: [],
}
