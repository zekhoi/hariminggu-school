/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0DAD8E",
        },
        grayed: {
          DEFAULT: "#F7F7F7",
        },
      },
    },
  },
  plugins: [],
};
