module.exports = {
  corePlugins: {
    float: false,
    object: false,
    objectPosition: false,
    visibility: false
  },
  theme: {
    fontFamily: {
      sans: ['DM Sans', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans'],
    },
    fontSize: {
      base: '14.2px',
      micro: '12.8px'
    },
    lineHeight: {
      normal: 1.4
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray: {
        100: '#f9f9fb',
        150: '#f0f0fa',
        200: '#e9e9f7',
        300: '#dcddf4',
        400: '#c8c9e4',
        500: '#acacd2',
        600: '#7c7fb6',
        700: '#5e608d',
        800: '#3f405f',
        900: '#171721',
      },
      primary: {
        300: '#d4d5ed',
        400: '#9496cc',
        500: '#6366ab',
        600: '#33307e',
        700: '#0a0d4d',
      },
      'highlight': {
        100: '#EBECFB',
        200: '#CDCFF4',
        300: '#AFB1ED',
        400: '#7477E0',
        500: '#383DD3',
        600: '#3237BE',
        700: '#22257F',
        800: '#191B5F',
        900: '#11123F',
      },
      red: '#e66181',
      magenta: {
        100: '#FDEFF6',
        200: '#F9D8E8',
        300: '#F5C0D9',
        400: '#EE90BD',
        500: '#E661A1',
        600: '#CF5791',
        700: '#8A3A61',
        800: '#682C48',
        900: '#451D30',
      },
      orange: '#fc8181',
      green: '#6ec48f',
      extend: {}
    },
    variants: {
      backgroundColor: ['responsive', 'hover', 'focus', 'focus-within'],
    },
    plugins: []
  }
}
