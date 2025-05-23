/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#1b2c6e', // Deep blue (main color from logo "A")
          50: '#e3e6f5',
          100: '#c6cce9',
          200: '#a8b1dd',
          300: '#8a96d0',
          400: '#6d7cc4',
          500: '#4f61b8',
          600: '#3f4e93',
          700: '#2f3a6e',
          800: '#1f2649',
          900: '#0f1324',
        },
        secondary: {
          DEFAULT: '#c52f2f', // Bright red (from the swoosh)
          50: '#fceaea',
          100: '#f8d5d5',
          200: '#f1aaaa',
          300: '#ea7f7f',
          400: '#e35555',
          500: '#dc2a2a',
          600: '#b92222',
          700: '#961a1a',
          800: '#731313',
          900: '#500b0b',
        },
        accent: {
          DEFAULT: '#f3c14e', // Gold ring around the dove
          50: '#fef9ec',
          100: '#fdf1d9',
          200: '#fce2b3',
          300: '#fbd38c',
          400: '#fac466',
          500: '#f9b540',
          600: '#c99533',
          700: '#987427',
          800: '#68541a',
          900: '#38230d',
        },
      },
    },
  },
  plugins: [],
};
