/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '4xs': ['0.55rem', { lineHeight: '0.75rem' }],
        '3xs': ['0.65rem', { lineHeight: '0.85rem' }],
        '2xs': ['0.725rem', { lineHeight: '0.95rem' }],
      },
      boxShadow: {
        '2xs': '0 1px 2px 0 rgba(0, 0, 0, 0.03)',
      },
      colors: {
        brand: {
          green: {
            DEFAULT: '#2D5A27',
            dark: '#1E3F20',
            light: '#EAF2EB',
            hover: '#244720'
          },
          earth: {
            DEFAULT: '#C87A53',
            dark: '#8C4E35',
            light: '#FAF0EB',
            hover: '#B56740'
          },
          orange: {
            DEFAULT: '#F2994A',
            light: '#FDF2E9',
            hover: '#E28732'
          },
          cream: '#FBFBFB',
          beige: '#F6F4F1',
          navy: {
            DEFAULT: '#002842',
            hover: '#001a2d',
            light: '#E5EEFF'
          },
          yellow: {
            DEFAULT: '#FFD100',
            hover: '#e6bc00'
          },
          slate: '#59606D'
        }
      },
      fontFamily: {
        sans: ['"Readex Pro"', 'sans-serif'],
        title: ['"Fredoka"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
