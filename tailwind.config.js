/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'navy': '#1a3a52',
        'navy-dark': '#0f1f2e',
        'forest': '#2d5a3d',
        'forest-dark': '#1f3d2a',
        'silver': '#e8e8e8',
        'silver-dark': '#d0d0d0',
        'off-white': '#f9f9f9',
        'off-white-warm': '#faf8f6',
        'stone': '#7a8a8f',
        'stone-light': '#a8b5b8',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
};
