import type { Config } from 'tailwindcss';

const withAlpha = (rgbVar: string) => `rgb(var(${rgbVar}) / <alpha-value>)`;

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        abyss: '#0a0f1a',
        brand: {
          200: withAlpha('--brand-200'),
          300: withAlpha('--brand-300'),
          400: withAlpha('--brand-400'),
          500: withAlpha('--brand-500'),
          600: withAlpha('--brand-600'),
        },
        accent: {
          200: withAlpha('--accent-200'),
          300: withAlpha('--accent-300'),
          400: withAlpha('--accent-400'),
          500: withAlpha('--accent-500'),
        },
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        sans: ['ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(var(--brand-rgb), 0.15)',
        'glow-strong': '0 0 40px rgba(var(--brand-rgb), 0.28)',
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(var(--brand-rgb), 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(var(--brand-rgb), 0.05) 1px, transparent 1px)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
