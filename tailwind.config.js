/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],

  theme: {
    extend: {
      fontFamily: {
        edu: ['"Edu AU VIC WA NT Pre"', "sans-serif"],
        cur: ['"Sour Gummy"', "cursive"],
        play: ["Playwrite NG Modern", "serif"],
      },
    },
  },

  plugins: [],
};
