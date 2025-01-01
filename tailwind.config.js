/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "1234px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Inconsolata", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
