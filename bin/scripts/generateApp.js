const _ = require('lodash')
const replace = require('replace-in-file')

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
  const targetPath = `${target}/${names.__UPPER_CAMEL_NAME__}`

  const options = {
    files: [`${targetPath}/*.*`],
    from: [
      /__UPPER_CAMEL_NAME__/g,
      /__LOWER_CAMEL_NAME__/g,
      /__KEBAB_NAME__/g,
      /__NAME__/g
    ],
    to: Object.values(names)
  }

  // Start with copying over the base app
  await copy(`${basePath}/base`, targetPath)

  if (prettier) {
    await copy(`${basePath}/prettier`, targetPath)
  }

  if (travis) {
    await copy(`${basePath}/travis`, targetPath)
  }

  /* Replace template string variables in newly created folder */
  replace.sync(options)
  console.log(`${names.__UPPER_CAMEL_NAME__} created ✨`)
  console.log(`Be sure to update your package.json description!`)
}

module.exports = generateComponent
