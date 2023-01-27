/* eslint-disable no-undef */
module.exports = {
  content: ["./dist/**/*.html", "./src/**/*.{js,jsx,ts,tsx}", "./*.html"],
  plugins: [],
  theme: {
    fontFamily: {
      bitter: ["Bitter", "serif"],
      inter: ["Inter", "serif"],
    },
    colors: {
      transparent: "rgb(0, 0, 0, 0)",
      white: "#ffffff",
      black: "#000000",
      primary: "#232225",
      "mist-gray": "#edf1f3",
      "flamingo-pink": "#f2617a",
      "black-transparent": "rgb(0, 0, 0, 0.2)",
      "white-transparent": "rgba(255, 255, 255, 0.05)",
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
};
