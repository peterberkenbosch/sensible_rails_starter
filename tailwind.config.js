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
        bg: '#0f172a',
       "accent-bg": '#1e293b',
        text: '#f8fafc' ,
        "text-light": '#f1f5f9',
        border: '#cbd5e1',
        accent: '#0ea5e9',
        code: '#ef4444',
        preformatted: '#94a3b8',
        marked: '#fdba74',
        disabled: '#94a3b8',
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
