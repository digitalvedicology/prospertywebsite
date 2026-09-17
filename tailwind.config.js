/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#ff8528',
        'gold-light': '#ffb366',
        'gold-pale': '#fff5eb',
        ink: '#053384',
        muted: '#666',
        cream: '#faf8f4',
        line: '#e8e1d6',
      },
      fontFamily: {
        serif: ["'Playfair Display'", 'Georgia', 'serif'],
        sans: ["'Helvetica Neue'", 'Helvetica', 'Roboto', 'Arial', 'sans-serif'],
      },
      animation: {
        in: 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#666',
            a: {
              color: '#ff8528',
              textDecoration: 'underline',
              fontWeight: '600',
              '&:hover': {
                color: '#053384',
              },
            },
            h1: {
              color: '#053384',
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: '700',
              letterSpacing: '-0.5px',
            },
            h2: {
              color: '#053384',
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: '700',
              letterSpacing: '-0.3px',
            },
            h3: {
              color: '#053384',
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: '600',
            },
            strong: {
              color: '#053384',
              fontWeight: '700',
            },
            code: {
              color: '#d73a49',
              backgroundColor: '#f6f8fa',
              padding: '2px 6px',
              borderRadius: '3px',
            },
            pre: {
              backgroundColor: '#f6f8fa',
              color: '#24292e',
            },
            blockquote: {
              borderLeftColor: '#ff8528',
              color: '#666',
              fontStyle: 'italic',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
