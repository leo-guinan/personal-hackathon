/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'float': 'float 20s infinite ease-in-out',
        'fade-in-up': 'fadeInUp 0.8s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg)' 
          },
          '33%': { 
            transform: 'translateY(-30px) rotate(120deg)' 
          },
          '66%': { 
            transform: 'translateY(20px) rotate(240deg)' 
          },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
      spacing: {
        '15': '3.75rem',
        '25': '6.25rem',
      }
    },
  },
  plugins: [],
};