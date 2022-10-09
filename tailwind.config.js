/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
     animation: {
      bounce: "bounce 1s infinite"
     }
    },
    keyframes: {}
  },
  plugins: [],
};
