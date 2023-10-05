/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-sans)"],
      display: ["var(--font-display)"],
    },
    colors: {
      transparent: colors.transparent,
      primary: "#49BCA2",
      secondary: "#DEDEDE",
      white: "#FFFFFF",
      black: "#000000",
      display: "#1C1F35",
      footer: "#212121",
    },
  },
  plugins: [],
};
