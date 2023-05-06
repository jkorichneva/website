/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        beige: {
          DEFAULT: '#F4EEE0',
        },
        black: {
          DEFAULT: '#393646',
        },
        grey: {
          DEFAULT: '#4F4557',
        },
        brown: {
          DEFAULT: '#6D5D6E',
        }
      }
    },
  },
  plugins: [],
}
