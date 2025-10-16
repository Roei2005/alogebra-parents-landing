/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Assistant", "system-ui", "Arial"],
        heading: ["Rubik", "Assistant", "system-ui", "Arial"],
      },
    },
  },
  plugins: [],
}
