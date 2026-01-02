/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        beige: {
          DEFAULT: "#FAF8F5",
        },
        black: {
          DEFAULT: "#2E2A26",
        },
        grey: {
          DEFAULT: "#E9D8C3",
        },
        brown: {
          DEFAULT: "#C8A27A",
        },
      },
      fontFamily: {
        DEFAULT: 'Noto Sans',
        pacifico: 'Pacifico',
      },
      fontSize: {
        DEFAULT: '1.5rem',
        h1: '4.5rem',
      }
    },
  },
  plugins: [],
};
