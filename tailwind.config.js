/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /* =======================
         FONTS
      ======================= */
      fontFamily: {
        sans: ['Cairo', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        cairo: ['Cairo', 'sans-serif'],
      },

      /* =======================
         COLORS (MATCH index.css)
      ======================= */
      colors: {
        primary: {
          DEFAULT: '#4AB757',
          dark: '#3a9246',
          light: '#5bc768',
        },

        black: '#000000',
        white: '#ffffff',

        dark: {
          100: '#86868b',
          200: '#2e2e30',
          300: '#1d1d1f',
        },

        light: {
          100: '#adb5bd',
          200: '#f5f5f7',
        },
      },

      /* =======================
         BORDER RADIUS
      ======================= */
      borderRadius: {
        '2xl': '1.5rem',
        '3xl': '1.75rem',
        '4xl': '2rem',
      },

      /* =======================
         SPACING
      ======================= */
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },

      /* =======================
         SHADOWS
      ======================= */
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        custom: '0 10px 40px rgba(0, 0, 0, 0.1)',
      },

      /* =======================
         BACKDROP BLUR
      ======================= */
      backdropBlur: {
        xs: '2px',
      },

      /* =======================
         ANIMATIONS
      ======================= */
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },

      animation: {
        fadeIn: 'fadeIn 0.6s ease-out forwards',
        slideInLeft: 'slideInLeft 0.6s ease-out forwards',
        slideInRight: 'slideInRight 0.6s ease-out forwards',
        scaleIn: 'scaleIn 0.4s ease-out forwards',
      },
    },
  },
  plugins: [],
};
