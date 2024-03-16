/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        saiyan: ['Saiyan', 'Sans-Serif'],
      },
      maxHeight: {
        '90vh': '90vh',
      },
  },
  plugins: [],
  }
}
