/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./pages/**/*.{html,js,ts}", // Include pages directory if applicable
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "3rem", // 12 * 4px = 48px
        },
      },
    },
  },
  plugins: [],
};
