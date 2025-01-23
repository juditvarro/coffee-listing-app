/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        themeWhite: '#F6F2EE',
        themeYellow: '#F6C768',
        themeLightestGray: '#DCDCE2',
        themeLightGray: '#6F757C',
        themeDarkGray: '#4D5562',
        themeDarkestGray: '#1B1D1F',
        themeGreen: '#BEE3CC',
        themeBrown: '#302522',
        themeBlack: '#111315',
        themeRed: '#ED735D',
      },
      fontFamily: {
        dm: ['DM Sans', 'sans-serif'],
      },
      backgroundImage: {
        headerLg: 'url(./assets/bg-cafe-lg.jpg)',
        headerSm: 'url(./assets/bg-cafe-sm.jpg)',
        vector: 'url(./assets/vector.svg)',
        favourite: 'url(./assets/Star.svg)',
        favouriteFilled: 'url(./assets/Star_fill.svg)',
      },
    },
  },
  plugins: [],
};
