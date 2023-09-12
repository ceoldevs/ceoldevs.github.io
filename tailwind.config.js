/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ['./src/**/*.{html,js,astro}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Sora", "Inter", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        "lpt-lg": "1025px",
        "lpt": "769px",
        "tbl": "426px",
        "mbl-lg": "376px",
        "mbl-md": "321px",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}