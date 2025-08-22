// tailwind.config.js
module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './pages/**/*.vue',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: { primary: '#595bca' },
      fontFamily: { serif: ['Cinzel', 'serif'] }
    }
  },
  plugins: []
}