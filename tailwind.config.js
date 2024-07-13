module.exports = {
  content: [
    './src/**/*.{html,js,css}', // Include all CSS, HTML, and JS files in src directory
    './index.html', // Include the main HTML file
  ],
  theme: {
    extend: {
      height: {
        1000: '1000px', // Custom height class
      },
      minWidth: {
        50: '50px',
        200: '200px',
        600: '600px',
      },
      colors: {
        primary: {
          'bright-red': 'hsl(12, 88%, 59%)',
          'dark-blue': 'hsl(228, 39%, 23%)',
        },
        neutral: {
          'Dark-Grayish-Blue': 'hsl(227, 12%, 61%)',
          'Very-Dark-Blue': 'hsl(233, 12%, 13%)',
          'Very-Pale-Red': 'hsl(13, 100%, 96%)',
          'Very-Light-Gray': 'hsl(0, 0%, 98%)',
        },
      },
      fontFamily: {
        BeVietnamPro: ['Be Vietnam Pro', 'sans-serif'],
      },
      screens: {
        '2xl': '1372px', // Custom breakpoint for 1372px
      },
    },
  },
  plugins: [],
};
