/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        Mukta: "'Mukta', sans-serif",
        Script : "'Kaushan Script', cursive;"
      }
    },
  },

  plugins: [require("daisyui")],
}

