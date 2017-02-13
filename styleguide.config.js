const path = require('path')
const dir = path.resolve(__dirname, 'src')

module.exports = {
  title: 'React Components Library',
  defaultExample: true,
  serverPort: 8082,
  template: path.resolve('./index.html'),
  components: `${dir}/**/[A-Z]!(*.test).js`,
  updateWebpackConfig (webpackConfig) {
    webpackConfig.module.loaders.push({
      test: /\.jsx?$/,
      include: dir,
      loader: 'babel'
    }, {
      test: /\.s?css$/,
      include: dir,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            context: dir,
            importLoaders: 1,
            modules: true,
            localIdentName: '[path][name]__[local]_[hash:base64:5]'
          }
        }, {
          loader: 'sass-loader'
        }
      ]
    })
    return webpackConfig
  }
}
