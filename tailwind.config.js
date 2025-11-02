/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
          primary: '#477FF7',
        primaryDark: '#3757d6',
        accent: '#6A5AF9',
        bgLight: '#F6F8FB',
        muted: '#6B7280'
      }, keyframes: {
        float: { '0%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-8px)' }, '100%': { transform: 'translateY(0px)' } }
      },
      animation: { float: 'float 6s ease-in-out infinite' },
      backdropBlur: { xs: '4px' }
    }
  },
  plugins: [],
}

