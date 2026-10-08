/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#4F6652",
        moss: "#647A5E",
        sage: "#C3CFAA",
        linen: "#F8F0EB",
        sand: "#E9E0D5",
        paper: "#FDF9F6",
        blush: "#FBEAED",
        "blush-deep": "#F6D6DC",
        rose: "#E6A9B7",
        terracotta: "#C9826A",
        "terracotta-light": "#EBB09B",
        rust: "#8C5A47",
        ink: "#2B362D",
      },
      fontFamily: {
        serif: ["Fraunces", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        soft: "0 14px 40px -16px rgba(201, 133, 150, 0.28)",
      },
      letterSpacing: {
        "tight-serif": "-0.015em",
        label: "0.18em",
      },
    },
  },
  plugins: [],
};
