const autoprefixer = require('autoprefixer')
const path = require('path')
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin')
const paths = require('./paths')

function resolve() {
  return {
    // Don't need to specify extensions on imports of these types
    extensions: ['.js', '.json'],
    // Create aliases to make referencing our files easier
    alias: {
      core: path.resolve(__dirname, '../src/core'),
      common: path.resolve(__dirname, '../src/common'),
      styles: path.resolve(__dirname, '../src/common/styles')
    },
    plugins: [
      // Prevents users from importing files from outside of src/ (or node_modules/).
      new ModuleScopePlugin(paths.appSrc)
    ]
  }
}

function javascriptRules(opts) {
  const forProduction = opts && opts.forProduction
  return {
    test: /\.js$/,
    include: paths.appSrc,
    loader: require.resolve('babel-loader'),
    options: {
      // This is a feature of `babel-loader` for webpack (not Babel itself).
      // It enables caching results in ./node_modules/.cache/babel-loader/
      // directory for faster rebuilds.
      cacheDirectory: !forProduction
    }
  }
}

function imageRules() {
  // "url" loader works like "file" loader except that it embeds assets
  // smaller than specified limit in bytes as data URLs to avoid requests.
  // A missing `test` is equivalent to a match.
  return {
    test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
    loader: require.resolve('url-loader'),
    options: {
      limit: 10000,
      name: 'static/media/[name].[hash:8].[ext]'
    }
  }
}

function postCssLoader() {
  return {
    loader: require.resolve('postcss-loader'),
    options: {
      ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
      plugins: () => [
        require('postcss-flexbugs-fixes'),
        autoprefixer({
          browsers: [
            '>1%',
            'last 4 versions',
            'Firefox ESR',
            'not ie < 9' // React doesn't support IE8 anyway
          ],
          flexbox: 'no-2009'
        })
      ]
    }
  }
}

function sassLoader() {
  return {
    loader: require.resolve('sass-loader')
  }
}

function cssLoader(opts) {
  const forProduction = opts && opts.forProduction
  return {
    loader: require.resolve('css-loader'),
    options: {
      importLoaders: 1,
      modules: true,
      minimize: forProduction,
      sourceMap: forProduction,
      localIdentName: '[path][name]__[local]_[hash:base64:5]'
    }
  }
}

// Some libraries import Node modules but don't use them in the browser.
// Tell Webpack to provide empty mocks for them so importing them works.
function node() {
  return {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
}

module.exports = {
  resolve,
  javascriptRules,
  imageRules,
  postCssLoader,
  sassLoader,
  cssLoader,
  node
}
