/** @type {import('tailwindcss').Config} */
const nativewind = require("nativewind/tailwind/css");
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./<custom directory>/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [nativewind],
};
