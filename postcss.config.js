/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    require('postcss-nested'),
    require('postcss-for'),
    require('autoprefixer')
  ]
}

module.exports = config