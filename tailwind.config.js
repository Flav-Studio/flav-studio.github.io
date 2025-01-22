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
    fontFamily: {
      'helvetica': 'helvetica',
      'PPPangaia': 'PPPangaia',
      'lucida': ['Lucida Sans Typewriter', 'monospace']
    },
    extend: {
      maxWidth: {
        'max': '92rem'
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

