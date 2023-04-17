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
        lg: "8rem",
        xl: "10rem",
      },
    },
    extend: {
      fontSize: {
        xxs: ".625rem",
      },
    },
  },
  plugins: [
    require("tailwindcss-radix")({ prefix: "rdx" }),
    require("tailwindcss-animate"),
  ],
};
