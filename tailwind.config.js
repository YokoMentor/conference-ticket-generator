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
    colors: {
      heading: "hsl(0, 0%, 100%)",
      paragraph: "hsl(252, 6%, 83%)",
    },
    fontFamily: {
      sans: ["Inconsolata", "serif"],
    },
    extend: {
      backgroundImage: {
        "bg-mobile":
          "url('./images/pattern-circle.svg'),url('./images/pattern-lines.svg'),url('./images/pattern-squiggly-line-bottom.svg'),url('./images/pattern-squiggly-line-top.svg'),url('./images/background-mobile.png')",
        "bg-desktop":
          "url('./images/pattern-circle.svg'),url('./images/pattern-lines.svg'),url('./images/pattern-squiggly-line-bottom.svg'),url('./images/pattern-squiggly-line-top.svg'),url('./images/background-desktop.png')",
        "bg-tablet":
          "url('./images/pattern-circle.svg'),url('./images/pattern-lines.svg'),url('./images/pattern-squiggly-line-bottom.svg'),url('./images/pattern-squiggly-line-top.svg'),url('./images/background-tablet.png')",
      },
      backgroundPosition: {
        "bg-mobile": "right, top, left bottom, right top 25px",
      },
      backgroundSize: {
        "bg-mobile": "100px, 1000px, 300px, 110px, 100%",
      },
    },
  },
  plugins: [],
};
