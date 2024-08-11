/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'],
      },
      boxShadow: {
        'glass': 'inset 1px 1px 4px rgba(255, 255, 255, 0.652)',
        'glass-hover': 'inset 2px 2px 5px rgba(255, 255, 255, 0.767)',
      },
      colors: {
        'primary-bg': 'var(--color-primary-bg)',
        'secondary-bg': 'var(--color-secondary-bg)',
        'tertiary-bg': 'var(--color-tertiary-bg)',
        'primary-text': 'var(--color-primary-text)',
        'secondary-text': 'var(--color-secondary-text)',
        'tertiary-text': 'var(--color-tertiary-text)',
        'primary-blue': 'var(--color-primary-blue)',
        'secondary-blue': 'var(--color-secondary-blue)',
      },
      backgroundImage: {
        bgImg: 'var(--bg);'
      },
    },
  },
  plugins: [],
}

