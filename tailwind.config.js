const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')


function withValue(variable) {

  return `rgb(${variable} / <alpha-value>)`

}

function hexToRgb(hex) {
  const normal = hex.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  if (normal) return withValue(normal.slice(1).map(e => parseInt(e, 16)).join(" "));

  const shorthand = hex.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i);
  if (shorthand) return withValue(shorthand.slice(1).map(e => 0x11 * parseInt(e, 16)).join(" "));

  return null;
}

// hexToRgb('#FF0000')


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
