/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        lavender: {
          300: '#E6E6FA', // Custom lavender color at the 300 level
          400: '#D6CADD', // Optional: Custom lavender color at the 400 level
        },
      },
    },
  },
  plugins: [],
}

