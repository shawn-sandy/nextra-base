const withNextra = require('nextra')({
  theme: './src/themes/theme.tsx',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra()
