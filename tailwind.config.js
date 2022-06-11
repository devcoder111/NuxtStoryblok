// tailwind.config.js
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './components/**/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      'xs-alpina': '.795rem',
      'sm-alpina': '.9275rem',
      'base-alpina': '1.06rem',
      'lg-alpina': '1.1925rem',
      'xl-alpina': '1.325rem',
      '2xl-alpina': '1.59rem',
      '3xl-alpina': '1.9875rem',
      '4xl-alpina': '2.385rem',
      '5xl-alpina': '3.18rem',
      '6xl-alpina': '4.24rem',
      '7xl-alpina': '5.3rem'
    },
    extend: {
      backgroundImage: {
        'lace-pattern': "url('/jpg/lace.jpg')"
      },
      colors: {
        dark: '#212426',
        'dark-text': '#5E5E5E',
        'light-gray': '#d0d0d0'
      },
      fontFamily: {
        roboto: 'Roboto'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
