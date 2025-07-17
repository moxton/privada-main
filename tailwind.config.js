/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
        'nav': ['Inter', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          900: '#121212',
          800: '#1a1a1a',
          700: '#2a2a2a',
          100: '#f5f5f5',
        },
        gold: {
          500: '#C2A14D',
          600: '#D6A55E',
          700: '#B8964A',
        }
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      }
    },
  },
  plugins: [],
};