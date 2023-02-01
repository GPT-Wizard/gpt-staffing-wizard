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
      primary: "#1C1B1F",
      grey: "#808080",
      secondary: "#FF4057",
      "mist-gray": "#edf1f3",
      "flamingo-pink": "#f2617a",
      "secondary-transparent": "rgb(255, 64, 87, 0.75)",
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
