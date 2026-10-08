/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#4F6652",
        moss: "#647A5E",
        sage: "#C3CFAA",
        linen: "#F5F2EA",
        sand: "#E6E0D3",
        paper: "#FBFAF6",
        blush: "#F1F4EA",
        "blush-deep": "#E2EAD6",
        rose: "#A9B98F",
        petal: "#CCD8B9",
        terracotta: "#B8794F",
        "terracotta-light": "#E0A57F",
        rust: "#7F5A3C",
        ink: "#2B362D",
      },
      fontFamily: {
        serif: ["Fraunces", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        soft: "0 14px 40px -16px rgba(79, 102, 82, 0.22)",
      },
      letterSpacing: {
        "tight-serif": "-0.015em",
        label: "0.18em",
      },
    },
  },
  plugins: [],
};
