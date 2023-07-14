/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#070b1f",
        secondary: "#a5a0c0",
        tertiary: "#140f2f",
        "black-100": "#0e0c23",
        "black-200": "#08031f",
        "white-100": "#e8e7e7",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
