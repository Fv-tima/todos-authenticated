/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        deepBrown: "hsl(30, 36%, 23%)",
        lightBrown: "hsl(33, 33%, 94%)",
        lightWhite: "hsl(0, 0%, 100%)",
        lightBlack: "hsl(0, 0%, 71%)",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
