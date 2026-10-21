/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js", "./data.js"],
  theme: {
    extend: {
      // Thème NEUTRE de départ.
      // TODO (Partie 1) : remplacez ces valeurs par les couleurs et les polices de votre univers.
      colors: {
        brand: {
          DEFAULT: "#E63946",
          dark: "#1f1cb9",
          light: "#e8fdeb",
        },
        ink: "#17243A",
        muted: "#64748B",
        ground: "#F4F7FB",
        line: "#e1eee1",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["Courier New", "monospace"],
      },
    },
  },
  plugins: [],
};
