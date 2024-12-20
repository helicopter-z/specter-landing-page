const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // colors: {
      //   black: {
      //     50: '#444444',
      //   },
      // }
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    colors: {
      light: "#F8F8F8",
      grey: "#F0F0F0",
      white: colors.white,
      black: colors.black,
      blue: "#2B77E3",
      blacklight: "#444444",
    },
  },
  plugins: [],
};
