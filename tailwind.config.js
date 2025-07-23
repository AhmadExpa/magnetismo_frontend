/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",   // small phones
        xsm: "375px",  // slightly larger phones
        smm: "425px",  // small tablets / large phones
      },
    },
  },
  plugins: [],
}
