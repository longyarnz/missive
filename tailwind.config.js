module.exports = {
  corePlugins: {
    float: false
  },
  theme: {
    screens: {
      md: '768px',
      lg: '1024px',
    },
    fontFamily: {
      sans: ['DM Sans', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans'],
    },
    fontSize: {
      base: '14.2px'
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
      highlight: '#383dd3',
      red: '#e66181',
      orange: '#fc8181',
      green: '#6ec48f',
      extend: {}
    },
    variants: {},
    plugins: []
  }
}
