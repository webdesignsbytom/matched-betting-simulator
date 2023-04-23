/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'news-bg': "url('../assets/img')",
      },
      colors: {
        'main-colour': '#1F2937',
        'nav-colour': '#1F2937',
        'footer-colour': '#1F2937',
        'colour-pale': '#f1f5f9',
        'colour-light': '#e2e8f0',
        'colour-med': '#94a3b8',
        'colour-dark': '#1e293b',
        'transparent-black': 'rgba(0, 0, 0, 0.65)',
        'transparent-black-2': 'rgba(0, 0, 0, 0.85)',
        'transparent-white': 'rgba(255, 255, 255, 0.65)',
        'transparent-white-2': 'rgba(255, 255, 255, 0.45)',
        'transparent-purple': 'rgba(147, 51, 234, 0.65)',
        'transparent-green': 'rgba(22, 163, 74, 0.65)',
        'transparent-yellow': 'rgba(234, 179, 8, 0.65)',
        'main-text': '#000000',
        'alt-text': '#ffffff',
        'hover-text': '#94a3b8',
        'active-text': '#6b7280',
        'placeholder-text': 'rgb(55 65 81)',
        'error-red': '',
        'success-green': '',
        'event-red': '',
        'twitter-blue': '#1da1f2',
        'hyperlink-blue': '#2563eb',
        'secleted': '#2563eb',
        'non-selected': '#cbd5e1',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
