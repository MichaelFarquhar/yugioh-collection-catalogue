/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#fdab71',
        secondary: '#ffdbb8',
        accent: '#F97316',
        background: '#1a1a1a',
        surface: '#2a2a2a',
        text: '#ffffff',
        'text-secondary': '#b3b3b3',
      },
    },
  },
  plugins: [],
}