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
          // Explicit user-provided color hierarchy: #723a8d #38a7e7 #f16a40 #bdc52a #3c2f4b
          dark: '#3c2f4b',      // Deep eggplant dark (main text, bold headers, dark buttons)
          purple: '#723a8d',    // Brand purple (rich accent, hero car, highlights)
          blue: '#38a7e7',      // Cheerful sky cyan/blue
          coral: '#f16a40',     // Warm coral orange
          lime: '#bdc52a',      // Lime yellow-green
          lavender: '#EDE8F8',  // Soft hero lavender backdrop
          cream: '#F8F6FD',     // Clean soft page background
          beige: '#E8E1F3',     // Border tone

          // Pastels for bubble chips
          softblue: '#EBF7FD',
          softcoral: '#FEF2EF',
          softlime: '#F7F9E8',
          softpurple: '#F3EEFB',

          // Compatibility mappings for existing classes
          c1: '#3c2f4b',
          c2: '#723a8d',
          c3: '#38a7e7',
          c4: '#bdc52a',
          c5: '#f16a40',
          
          navy: {
            DEFAULT: '#3c2f4b',
            hover: '#2c2237',
            light: '#F3EEFB'
          },
          green: {
            DEFAULT: '#bdc52a',
            dark: '#3c2f4b',
            light: '#F7F9E8',
            hover: '#a8b024'
          },
          earth: {
            DEFAULT: '#723a8d',
            dark: '#3c2f4b',
            light: '#EDE8F8',
            hover: '#5c2d73'
          },
          orange: {
            DEFAULT: '#f16a40',
            light: '#FEF2EF',
            hover: '#d95329'
          },
          yellow: {
            DEFAULT: '#bdc52a',
            hover: '#a8b024'
          },
          slate: '#723a8d'
        }
      },
      fontFamily: {
        sans: ['"Nunito"', '"Quicksand"', 'sans-serif'],
        title: ['"Fredoka"', '"Quicksand"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
