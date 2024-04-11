/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all JSX/TSX files in the src directory
    "./public/index.html", // Include classes from your main HTML file
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}