module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      bgblack: "#121212",
      cardblack: "#181818",
      black: "#000000",
      arrowblack: "#BABABA",
      graywhite: "#b2b2b2",
      white: "#ffffff",
      hovercardblack: "#282828",
      navblack: "#212121",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
};
