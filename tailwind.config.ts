import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      transformStyle: {
        '3d': 'preserve-3d',
      },
      perspective: {
        '1000': '1000px',
      },
      fontFamily: {
        'tnanti': ['var(--font-tnanti)', 'sans-serif'],
        'caveat': ['Caveat', 'cursive'],
        'dancing': ['Dancing Script', 'cursive'],
        'pacifico': ['Pacifico', 'cursive'],
        'satisfy': ['Satisfy', 'cursive'],
      },
      animation: {
        'float': 'float 20s ease-in-out infinite',
        'float-slow': 'float 30s ease-in-out infinite',
        'float-slower': 'float 40s ease-in-out infinite',
        'float-across': 'floatAcross 60s linear infinite',
        'fade-in': 'fadeIn 1s ease-in',
        'fade-in-up': 'fadeInUp 1s ease-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '25%': { transform: 'translateY(-20px) translateX(10px)' },
          '50%': { transform: 'translateY(10px) translateX(-10px)' },
          '75%': { transform: 'translateY(-10px) translateX(20px)' },
        },
        floatAcross: {
          '0%': { 
            left: '-200px',
            transform: 'translateY(0px)',
          },
          '25%': {
            transform: 'translateY(-15px)',
          },
          '50%': {
            transform: 'translateY(10px)',
          },
          '75%': {
            transform: 'translateY(-8px)',
          },
          '100%': {
            left: '110%',
            transform: 'translateY(0px)',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      colors: {
        'cloud': '#f8fafc',
        'sky-light': '#e0f2fe',
        'gold-soft': '#fef3c7',
      },
    },
  },
  plugins: [
    function({ addUtilities }: any) {
      addUtilities({
        '.transform-gpu': {
          transform: 'translateZ(0)',
        },
        '.preserve-3d': {
          transformStyle: 'preserve-3d',
        },
        '.perspective': {
          perspective: '1000px',
        },
        '.backface-hidden': {
          backfaceVisibility: 'hidden',
        },
      })
    },
  ],
}
export default config