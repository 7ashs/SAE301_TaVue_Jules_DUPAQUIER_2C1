module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'michroma': ['Michroma', 'sans'],
        'inter':    ['Inter', 'sans-serif'],
      },
      colors: {
        noir: '#000000',
        noir20: '#202020',
        blanc: '#ffffff',
        bleu: '#002395',
        bleuclair: '#BFC8E4',
        rouge: '#ED2939',
      },
    },
  },
  plugins: [],
}
