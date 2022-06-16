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
      colors: {
        bg: 'var(--bg)',
        'accent-bg': 'var(--accent-bg)',
        text: 'var(--text)',
        'text-light': 'var(--text-light)',
        border: 'var(--border)',
        accent: 'var(--accent)',
        code: 'var(--code)',
        preformatted: 'var(--preformatted)',
        marked: 'var(--marked)',
        disabled: 'var(--disabled)',
      }
    }
  },
  corePlugins: {
    aspectRatio: false
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp')
  ]
}
