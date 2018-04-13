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
  /* Replace template string variables in newly created folder */
  replace.sync(options)
  console.log(`${names.__UPPER_CAMEL_NAME__} created ✨`)
  console.log(`Be sure to update your package.json description!`)
}

module.exports = generateComponent
