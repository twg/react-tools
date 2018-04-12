const _ = require('lodash')
const replace = require('replace-in-file')
const execSync = require('child_process').execSync

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

  // Add prettier if needed
  if (prettier) {
    await copy(`${basePath}/prettier`, './')
    // execSync(`npx npm-add prettier husky lint-staged`)
    // Add lint-staged to file
  }

  // Add travis if needed
  if (travis) {
    await copy(`${basePath}/travis`, './')
  }

  // Add other npm modules that are needed

  /* Replace template string variables in newly created folder */
  replace.sync(options)
  console.log(`${names.__UPPER_CAMEL_NAME__} created ✨`)
  console.log(`Be sure to update your package.json description!`)
}

module.exports = generateComponent
