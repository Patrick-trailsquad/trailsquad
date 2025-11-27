
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        stone: {
          DEFAULT: '#F5F5F4',
          dark: '#E7E5E4'
        },
        sage: {
          DEFAULT: '#8A9A5B',
          light: '#A3B26B'
        },
        terra: {
          DEFAULT: '#E2725B',
          light: '#F0937D'
        },
        charcoal: '#2C3539',
        yellow: '#FFD700',
        orange: {
          DEFAULT: 'hsl(var(--orange))',
          foreground: 'hsl(var(--orange-foreground))'
        },
      },
      fontFamily: {
        cabinet: ['Cabinet Grotesk', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'fade-in': {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        },
        'scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'scroll': 'scroll 40s linear infinite',
        'scroll-desktop': 'scroll 50s linear infinite',
        'scroll-slow': 'scroll 80s linear infinite',
        'scroll-desktop-slow': 'scroll 100s linear infinite'
      },
      borderColor: {
        border: 'hsl(var(--border))',
      },
      backgroundColor: {
        background: 'hsl(var(--background))',
      },
      textColor: {
        foreground: 'hsl(var(--foreground))',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
