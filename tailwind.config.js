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
      maxWidth: {
        'max': '1621px'
      },
      colors: {
        'fsblack': '#171717',
        'fsgrey': '#F2F0F1BF'
      },
      lineHeight: {
        '12': '2.70rem'
      }
    },
  },
  plugins: [],
}

