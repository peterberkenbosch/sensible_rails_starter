const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/views/**/*.{html,html.erb,erb}',
    './app/views/devise/**/*.{html,html.erb,erb}',
    './app/frontend/components/**/*.{vue,js,ts,jsx,tsx}',
    './app/frontend/**/*.{vue,js,ts,jsx,tsx}',
    './app/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'sans': ["BlinkMacSystemFont", "Avenir Next", "Avenir",
        "Nimbus Sans L", "Roboto", "Noto Sans", "Segoe UI", "Arial", "Helvetica",
        "Helvetica Neue", "sans-serif"],
      'mono': ["Consolas", "Menlo", "Monaco", "Andale Mono", "Ubuntu Mono", "monospace"]
    },
    extend: {
      //  fontSize: {
      //   'xs': '.75rem',
      //   'sm': '.875rem',
      //   'tiny': '.875rem',
      //   'base': '0.96rem',
      //   'lg': '1.15rem',
      //   'xl': '1.25rem',
      //   '2xl': '1.44rem',
      //   '3xl': '2rem',
      //   '4xl': ['2.6rem', '1.83em'],
      //   '5xl': ['3rem', '1.1'],
      //   '6xl': '4rem',
      //   '7xl': '5rem',
      // },

      colors: {
        simple: {
          bg: '#212121',
          'accent-bg': '#2b2b2b',
          text: '#dcdcdc',
          'text-light': '#ababab',
          border: '#666',
          accent: '#ffb300',
          code: '#f06292',
          preformatted: '#ccc',
          disabled: '#111',
          marked: "#11110DFF"
        },
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}
