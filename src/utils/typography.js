import Typography from 'typography'
import colors from './colors'
import color from 'tinycolor2';
// import Wordpress2016 from 'typography-theme-wordpress-2016'
// import sutroTheme from 'typography-theme-sutro'

const typography = new Typography({
  baseFontSize: '14px',
  bodyColor: colors.baseFontColor,
  baseLineHeight: 1.666,
  headerFontFamily: ['Open Sans'],
  bodyFontFamily: ['Merriweather'],
  scaleRatio: 1.8,
  googleFonts: [{
      name: 'Open Sans',
      styles: [
        '700'
      ]
    },
    {
      name: 'Merriweather',
      styles: [
        '400',
        '400i',
        '700',
        '700i'
      ]
    }
  ],
  includeNormalize: true
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography