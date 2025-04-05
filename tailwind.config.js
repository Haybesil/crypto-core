/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#3a96ff",
        "neutral1": "#ffffff",
        "neutral2": "rgb(218,218,218)",
        "neutral4": "rgb(218,218,218)",
        "accent4": "rgb(30,35,41)",
        "accent2": "rgb(2,5,10)",
        "accent5": "rgb(9,19,29)",
        "accent6": "rgb(15,30,46)",
      },
    },
  },
  plugins: [],
}