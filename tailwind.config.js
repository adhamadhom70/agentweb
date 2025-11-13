/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // THESE CLASSES MUST EXIST IN THIS BLOCK
        'main-background': '#ffffffff',  // <- ENSURE YOUR HEX CODE IS HERE
        'text-primary': '#000000ff',
        // ... other custom colors ...
      },
    },
  },
  plugins: [],
};