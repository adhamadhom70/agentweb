/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-red': '#8B0000',
        'gold': '#D4AF37',
        'gold-light': '#E5C158',
        'gold-dark': '#B8941F',
        'charcoal': '#1a1a1a',
        'charcoal-light': '#2a2a2a',
        'charcoal-dark': '#0f0f0f',
        'background': '#0a0a0a',
        'background-light': '#0f0f0f',
        'text-dark': '#e5e5e5',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
