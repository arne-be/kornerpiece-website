/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#010208",
        secondary: "#D15F4C",
        accent: "#FFAEAB",
        neutral: "#E3E4E6" /* used with opacity 100, 65 and 45 for different shades*/
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        accent: '0 0 900px -60px rgba(255, 174, 171, 0.001)',
      },
      transitionProperty: {
        'padding': 'padding',
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};