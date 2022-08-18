/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

// Rotate Y utilities
const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-y-20': {
      transform: 'rotateY(20deg)',
    },
    '.rotate-y-40': {
      transform: 'rotateY(40deg)',
    },
    '.rotate-y-60': {
      transform: 'rotateY(60deg)',
    },
    '.rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
  })
})

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    rotateY
  ],
}
