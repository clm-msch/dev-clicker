/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#532EE7',
        white: '#ffffff',
        light_grey: '#E9EAFF',
        dark_grey: '#242938',
        gradient: 'linear-gradient(101.23deg, #532EE7 17.61%, #2600BF 99.55%)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
