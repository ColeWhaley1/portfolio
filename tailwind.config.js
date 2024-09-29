/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat']
      },
      keyframes: {
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0px)'
          }
        },
        fadeOutUp: {
          '0%': {
            opacity: '1',
            transform: 'translateY(0px)'
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(-50px)'
          }
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(50px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0px)'
          }
        },
        expand: {
          '0%': {
            height: 'var(--contact-height)',
            width: 'var(--contact-width)',
          },
          '100%': {
            height: '200px',
            width: '400px'
          }
        },
        collapse: {
          '0%': {
            height: 'var(--contact-height)',
            width: 'var(--contact-width)',
          },
          '100%': {
            height: '40px',
            width: '160px',
          }
        }
      },
      animation: {
        fadeInLeft: 'fadeInLeft 0.8s ease-out',
        fadeOutUp: 'fadeOutUp .5s forwards',
        fadeInUp: 'fadeInUp .5s forwards',
        expand: 'expand .3s ease-out forwards',
        collapse: 'collapse .3s ease-out backwards',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}

