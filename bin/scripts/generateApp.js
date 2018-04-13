const _ = require('lodash')
const replace = require('replace-in-file')
const execSync = require('child_process').execSync
const fs = require('fs')
const packageSort = require('sort-package-json')

const copy = require('./copy')

const generateComponent = async ({
  type,
  styled,
  prettier,
  travis,
  name,
  target
}) => {
  const names = {
    __UPPER_CAMEL_NAME__: _.upperFirst(_.camelCase(name)),
    __LOWER_CAMEL_NAME__: _.camelCase(name),
    __KEBAB_NAME__: _.kebabCase(name),
    __NAME__: name
  }
  const basePath = `${__dirname}/../templates/app`
  const targetPath = `${__dirname}/${target}/${names.__KEBAB_NAME__}`

  const deps = JSON.parse(
    fs.readFileSync(`${basePath}/base/snippets/dependencies.json`)
  )

  const options = {
    files: [`./*.*`],
    from: [
      /__UPPER_CAMEL_NAME__/g,
      /__LOWER_CAMEL_NAME__/g,
      /__KEBAB_NAME__/g,
      /__NAME__/g
    ],
    to: Object.values(names)
  }

  // Start with running cra
  console.log(
    `Generating ${names.__KEBAB_NAME__} . . . This will take a moment`
  )
  process.chdir(target)
  execSync(`npx create-react-app ${names.__KEBAB_NAME__}`)

  // Ejecting the app
  console.log(`Preparing for updating ${names.__KEBAB_NAME__} . . .`)
  process.chdir(names.__KEBAB_NAME__)
  execSync(`echo y | npm run eject`)

  // Copy src folder from sample app
  console.log(`Setting up ${targetPath}/src . . .`)
  execSync(`rm -rf ./src`)
  await copy(`${basePath}/base/src`, `./src`)
  let jsonData = JSON.parse(fs.readFileSync('package.json'))

  jsonData = _.merge(jsonData, deps)

  // Add prettier if needed
  if (prettier) {
    console.log(`Adding Prettier`)
    await copy(`${basePath}/prettier`, './')
    const prettier = JSON.parse(
      fs.readFileSync(`${basePath}/prettier/dependencies.json`)
    )
    jsonData = _.merge(jsonData, prettier)
  }

  // Add travis if needed
  if (travis) {
    console.log(`Adding Travis`)
    await copy(`${basePath}/travis`, './')
  }

  // clean up adjusted package.json
  const sorted = packageSort(jsonData)
  fs.writeFileSync('package.json', JSON.stringify(sorted))

  // Update webpack config file for sass ++ aliases
  let webpackDev = fs.readFileSync('config/webpack.config.dev.js', 'utf8')
  const aliasMarker = 'alias: {'
  const index = webpackDev.indexOf(aliasMarker) + aliasMarker.length
  const aliases = `      core: path.resolve(__dirname, '../src/core'),
  common: path.resolve(__dirname, '../src/common'),
  styles: path.resolve(__dirname, '../src/common/styles'),`
  webpackDev = webpackDev.substr(0, index) + aliases + webpackDev.substr(index)

  const cssMarker = '.css'
  const cssIndex = webpackDev.indexOf(cssMarker) + 1
  const sassVal = `s?`
  webpackDev =
    webpackDev.substr(0, cssIndex) + sassVal + webpackDev.substr(cssIndex)

  const fileMarker = `loader: require.resolve('postcss-loader'),`
  let fileIndex = webpackDev.indexOf(fileMarker) - 34
  const loaderVal = `,
    {
      loader: require.resolve('sass-loader')
    }`

  webpackDev =
    webpackDev.substr(0, fileIndex) + loaderVal + webpackDev.substr(fileIndex)

  fs.writeFileSync('config/webpack.config.dev.js', webpackDev)

  /* Replace template string variables in newly created folder */
  replace.sync(options)
  console.log(`${names.__UPPER_CAMEL_NAME__} created ✨`)
  console.log(`Be sure to update your package.json description!`)
}

module.exports = generateComponent
