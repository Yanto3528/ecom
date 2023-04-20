const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        md: "2rem",
        lg: "4rem",
        xl: "10rem",
      },
    },
    extend: {
      colors: {
        primary: {
          50: colors.blue[50],
          100: colors.blue[100],
          200: colors.blue[200],
          300: colors.blue[300],
          400: colors.blue[400],
          500: colors.blue[500],
          600: colors.blue[600],
          700: colors.blue[700],
          800: colors.blue[800],
          900: colors.blue[900],
          DEFAULT: colors.blue[500],
        },
      },
      fontSize: {
        xxs: ".625rem",
      },
    },
  },
  plugins: [require("tailwindcss-radix")(), require("tailwindcss-animate")],
};
