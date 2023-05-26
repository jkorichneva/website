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
          DEFAULT: "#F1F6F9",
        },
        black: {
          DEFAULT: "#212A3E",
        },
        grey: {
          DEFAULT: "#9BA4B5",
        },
        brown: {
          DEFAULT: "#394867",
        },
      },
    },
  },
  plugins: [],
};
