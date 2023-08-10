/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    maxWidth: {
      container: "1440px",
      contentContainer: "1440px",
      containerSmall: "1024px",
      containerxs: "768px",
    },
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Montserrat", "sans-serif"],
        titleFont: ["Inter", "sans-serif"],
      },
      boxShadow: {
        navbarShadow: "0 10px 30px -10px rgba(2,12,27,0.7)",
      },
      colors: {
        standardGreen: "#52D488",
        standardPink: "#EA4C89",
        standardSlate: "#181B1B",
        standardGray: "#8D8E8E",
        standardBlue: "#6BC9FB",
        standardBlack: "#111313",
        standardOrange: "#ED734B",
        // standardPink: "#D17178",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
