const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ],
  theme: {
    extend: {
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '0.96rem',
        'lg': '1.15rem',
        'xl': '1.25rem',
        '2xl': '1.44rem',
        '3xl': '2rem',
        '4xl': ['2.6rem', '1.83em'],
        '5xl': ['3rem', '1.1'],
        '6xl': '4rem',
        '7xl': '5rem',
      },
      colors: {

        bg: '#212121',
       'accent-bg': '#2b2b2b',
        text: '#dcdcdc',
        'text-light': '#ababa',
        border: '#666',
        accent: '#ffb300',
        code: '#f06292',
        preformatted: '#ccc',
        disabled: '#111',

     /*   bg: 'rgb(var(--bg) / <alpha-value>)',
        'accent-bg': 'rgb(var(--accent-bg) / <alpha-value>)',
        text: 'rgb(var(--text) / <alpha-value>)',
        'text-light': '(var(--text-light) / <alpha-value>)',
        border:  '(var(--border) / <alpha-value>)',
        accent:  '(var(--accent) / <alpha-value>)',
        code:  '(var(--code) / <alpha-value>)',
        preformatted:  '(var(--pre) / <alpha-value>)',
        disabled:  '(var(--disabled) / <alpha-value>)',*/
      },
    },
  },
  corePlugins: {
    aspectRatio: false
  },
  plugins: [
    require('@tailwindcss/typography'),
    
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp')
  ]
}
