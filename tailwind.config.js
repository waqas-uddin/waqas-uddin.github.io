/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#6C63FF',
          light: '#8B83FF',
          dark: '#4A42DD',
        },
        accent: '#00D4FF',
        neon: {
          purple: '#6C63FF',
          cyan: '#00D4FF',
          pink: '#FF6B9D',
          green: '#00FF94',
        },
        dark: {
          DEFAULT: '#0A0A0F',
          card: '#111827',
          border: '#1F2937',
        }
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'border-spin': 'border-spin 4s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'scan': 'scan 4s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'border-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(108,99,255,0.3)' },
          '100%': { boxShadow: '0 0 25px rgba(108,99,255,0.7), 0 0 50px rgba(108,99,255,0.3)' },
        }
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(108,99,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.06) 1px, transparent 1px)',
        'dot-pattern': 'radial-gradient(circle, rgba(108,99,255,0.15) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '50px 50px',
        'dot': '24px 24px',
      }
    },
  },
  plugins: [],
}
