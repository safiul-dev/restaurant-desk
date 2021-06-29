module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      middle1Bg: '#BCDDD4',
      primary: '#519E8A',
      secondary: '#ecc94b',
      black: '#000000',
      white: '#FFFFFF',
      TheadColor: '#748883'
    },
    fontSize: {
      'mainButtonFontSize': '30px',
      'leftButtonFontSize': '24px',
      'tiny': '.875rem',
       'base': '1rem',
       'lg': '1.125rem',
       'xl': '1.25rem',
       '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
       '5xl': '3rem',
       '6xl': '4rem',
      '7xl': '5rem',
     },
    extend: {
      width: {
        '1/3': '157px',
        'leftMainWidth': '10%',
        'middleWidth': '87.5%',
        'rigthWidth': '2.5%',
        'middle1': '47.6603%',
        'middle2': '22.5303%',
        'middle3': '29.809%',
      },

      height: {
        'leftberButtonHeight': '63px',
        'topHeight': '5%',
        'middleHeight': '90%',
        'bottomHeight': '5%',
        'middle1SmallTableCollunmHeight': '7%',
        'middle1LongTableCollunmHeight': '79%'
      },

      borderRadius: {
        'none': '0',
       'sm': '0.125rem',
       DEFAULT: '0.25rem',
       DEFAULT: '4px',
       'md': '0.375rem',
       'lg': '0.5rem',
       'full': '9999px',
       'large': '12px',
       'middle1BottomRounded': '70px'
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwindcss"),
       require("autoprefixer")
  ],
};
