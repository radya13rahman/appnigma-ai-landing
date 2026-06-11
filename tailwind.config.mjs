/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: '#2a83fc',
        },
        neutral: {
          950: '#0a0a0a',
          900: '#151515',
          800: '#262626',
          700: '#3d3d3d',
          600: '#525252',
          500: '#7d7d7d',
          200: '#e5e5e5',
          150: '#ebebeb',
          100: '#f9f9f9',
          50:  '#fafafa',
        },
      },
      letterSpacing: {
        heading: '-1.2px',
        tight: '-0.02em',
        tighter: '-0.04em',
        button: '-0.14px',
      },
    },
  },
  plugins: [],
};
