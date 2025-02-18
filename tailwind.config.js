/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2ecc71',
        secondary: '#FFD700',
        neutral: '#F5F5F5',
        text: '#2C3E50',
        error: '#e74c3c',
        success: '#27ae60',
      },
    },
  },
  plugins: [],
}