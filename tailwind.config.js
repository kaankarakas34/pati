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
      borderRadius: {
        'none': '0px',
        'sm': '9999px',
        'DEFAULT': '9999px',
        'md': '9999px',
        'lg': '9999px',
        'xl': '9999px',
        '2xl': '2rem',
        '3xl': '2.5rem',
        '4xl': '3rem',
        'full': '9999px',
      },
      colors: {
        brand: {
          // Explicit user-provided color hierarchy
          c1: '#201c33', // Deepest dark purple (text, dark headings, primary buttons)
          c2: '#44385c', // Muted deep purple (secondary dark, borders, dark icons)
          c3: '#765c92', // Medium soft purple (accents, interactive, badges)
          c4: '#b98ad5', // Light lavender (soft pills, borders, highlights)
          c5: '#ffc1ff', // Softest violet/pink tint (pale accents, subtle glows)
          
          // Semantic mappings for compatibility across codebase
          navy: {
            DEFAULT: '#201c33',
            hover: '#191528',
            light: '#F5F1F8'
          },
          purple: {
            DEFAULT: '#44385c',
            dark: '#201c33',
            medium: '#765c92',
            light: '#b98ad5',
            pale: '#ffc1ff'
          },
          green: {
            DEFAULT: '#44385c',
            dark: '#201c33',
            light: '#F5F1F8',
            hover: '#352b49'
          },
          earth: {
            DEFAULT: '#765c92',
            dark: '#44385c',
            light: '#F5F1F8',
            hover: '#5e4875'
          },
          orange: {
            DEFAULT: '#765c92',
            light: '#F5F1F8',
            hover: '#44385c'
          },
          cream: '#F7F4FA', // Subtle pale purple background (not pure white)
          beige: '#EFEBF3', // Subtle separator/border
          yellow: {
            DEFAULT: '#b98ad5',
            hover: '#a673c4'
          },
          slate: '#765c92'
        }
      },
      fontFamily: {
        sans: ['"Quicksand"', 'sans-serif'],
        title: ['"Quicksand"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
