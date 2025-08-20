/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: ['text-h1', 'text-h2', 'text-h3', 'text-body', 'text-body-sm'],
  theme: {
    extend: {
      colors: {
        base: {
          50: '#eff6ff',
          100: '#FCFDFF',
          200: '#F5F5F7',
          300: '#DEDEE0',
          400: '#C4C2CC',
          500: '#9E9EA1',
          600: '#0A0A0B'
        },
        red: '#E41C4E',
        green: '#008C5D'
      },
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif']
      },
      fontSize: {
        h1: [
          '32px',
          {
            lineHeight: '1.12em',
            fontWeight: '700'
          }
        ],
        h2: [
          '28px',
          {
            lineHeight: '1.14em',
            fontWeight: '700'
          }
        ],
        h3: [
          '18px',
          {
            lineHeight: '1.11em',
            fontWeight: '500'
          }
        ],
        body: [
          '14px',
          {
            lineHeight: '1.42em',
            fontWeight: '400'
          }
        ],
        'body-sm': [
          '12px',
          {
            lineHeight: '1.33em',
            fontWeight: '400'
          }
        ]
      },
      borderRadius: {
        DEFAULT: '32px',
        card: '20px'
      },
      padding: {
        desktop: '4rem'
      },
      margin: {
        desktop: '4rem'
      },
      maxWidth: {
        desktop: '1084px'
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'spin-slow': 'spin 3s linear infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      }
    }
  },
  plugins: []
};
