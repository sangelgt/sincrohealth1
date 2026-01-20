import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sincro-blue': '#137fec',
        'cream': '#F1F5F9',
        'taupe': '#8D8273',
        'deep-navy': '#0A192F',
        'cloud-white': '#F8FAFC',
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [
    forms,
    typography,
    aspectRatio,
  ],
}
