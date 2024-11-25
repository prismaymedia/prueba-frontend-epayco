/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
      xs: { max: "575px" },
      s: { min: "576px", max: "767px" },
      m: { min: "768px", max: "991px" },
      l:{ min: "992px"},
      },
   },
  },
  plugins: [],
}

