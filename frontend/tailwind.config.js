/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
          'sm': '640px',   
          // => @media (min-width: 640px) { ... }

          'md': '768px',   
          // => @media (min-width: 768px) { ... }

          'lg': '1024px',   
          // => @media (min-width: 1024px) { ... }

          'xl': '1280px',   
          // => @media (min-width: 1280px) { ... }
        },
      fontFamily: {
        display: ['Monomaniac One', 'sans-serif'],
        footer: ['Molengo', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        patua: ['Patua One', 'sans-serif'],
        
      },
      margin: {
        320: '320px',
      },
      width: {
        190: '190px',
        275: '275px',
        300: '300px',
        340: '340px',
        350: '350px',
        656: '656px',
        880: '880px',
        508: '508px',
      },
      height: {
        80: '80px',
        340: '340px',
        370: '370px',
        420: '420px',
        510: '510px',
        600: '600px',
        685: '685px',
        800: '800px',
        '90vh': '90vh',
      },
      flex: {
        0.7: '0.7 1 0%',
      },
      maxHeight: {
        370: '370px',
      },
      minWidth: {
        210: '210px',
        350: '350px',
        620: '620px',
      },
      textColor: {
        lightGray: '#D9D9D9',
        primary: '#FBFBFB',
        secColor: '#efefef',
        navColor: '#BEBEBE',
      },
      backgroundColor: {
        mainColor: '#FBFBFB',
        secondaryColor: '#F0F0F0',
        blackOverlay: 'rgba(0, 0 ,0 ,0.7)',
        contact: '#f0f0f0f1',
        bgBlack:'#040D12',
        card: '#F5F5F5',
        card_1: '#F5F4F4',
        contain: '#FDFDFD'
      },
      keyframes: {
        'slide-in': {
          '0%': {
            '-webkit-transform': 'translateX(200px)',
            transform: 'translateX(200px)',
          },
          '100%': {
            '-webkit-transform': 'translateX(0px)',
            transform: 'translateX(0px)',
          },
        },

        'slide-fwd': {
          '0%': {
            '-webkit-transform': 'translateZ(0px)',
            transform: 'translateZ(0px)',
          },
          '100%': {
            '-webkit-transform': 'translateZ(160px)',
            transform: 'translateZ(160px)',
          },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.5s ease-out',
        'slide-fwd': ' slide-fwd 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },
      transitionProperty: {
        height: 'height',
      },
    },
    cursor: {
      'zoom-in': 'zoom-in',
      pointer: 'pointer',
    },
  },
  variants: {
    // backgroundColor: ['active'],
    extend: {},
  },
  plugins: [],
};