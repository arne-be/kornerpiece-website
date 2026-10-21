/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#010208",
        secondary: "#D15F4C",
        "secondary-dark": "#B84A38" /* secondary is too light for small text on paper */,
        "secondary-darker": "#8F3526",
        accent: "#FFAEAB",
        "accent-soft": "#FFEDEC",
        neutral: "#E3E4E6",
        paper: "#FAFAF8",
        body: "#45464C",
        muted: "#5C5D63",
      },
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
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
