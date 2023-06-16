module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'Heebo': ['Heebo'],
      'ptSerif': ['PT Serif', 'serif'],

    },
    extend: {
      colors: {
        'blackO': 'rgba(0, 0, 0, 0.43)',
        'blueO':'rgba(39, 52, 139, 0.43)',
        'redO':'rgba(227, 6, 19, 0.43)',
        'yellowO':'rgba(255, 222, 0, 0.43)',
        'regular':'rgb(227, 6, 19)',
        'premium':'rgb(39, 52, 139)',
        'good':'rgb(255, 222, 0)',
        'organic':'rgb(236, 213, 187)',
        'organicPremium':'rgb(0, 0, 0)',

      },
      backgroundImage: theme => ({
        'bg2img': "url('/src/img/bg2.jpg')",
        'bg3img': "url('/src/img/huileBranche.png')"
      })
    },
    screens: {
      "mobile":{ "min": "320px" },
      "mobile2":{ "min": "425px" },
      "sm":{ "min": "640px" },
      "md":{ "min": "768px" },
      "md2":{ "min": "900px" },
      "lg":{ "min": "1024px" },
      "lg2":{ "min": "1200px" },
      "xl":{ "min": "1280px" },
      "2xl":{ "min": "1536px" },
    },
  },
  plugins: [],
}
