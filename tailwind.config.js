/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-inter)',
        alt: 'var(--font-bai-jamjuree)',
      },
      blur: {
        full: '194px',
      },
      colors: {
        primary: {
          light: '#3BC1E2',
          main: '#2D93AD',
          dark: '#1B5564',
        },
        light: {
          main: '#e1e1e6',
          dark: '#a8a8b3',
          darker: '#5C5C69',
        },
        dark: {
          lighten: '#3A3A41',
          light: '#29292e',
          main: '#121214',
          dark: '#09090a',
        },
      },
    },
  },
  plugins: [],
}
