const _ = require('lodash')
const replace = require('replace-in-file')

const copy = require('./copy')

const generateComponent = async ({ type, redux, name, target }) => {
  const names = {
    __UPPER_CAMEL_NAME__: _.upperFirst(_.camelCase(name)),
    __LOWER_CAMEL_NAME__: _.camelCase(name)
  }
  const basePath = `${__dirname}/../templates`
  const targetPath = `${target}/${names.__UPPER_CAMEL_NAME__}`

  const options = {
    files: [`${targetPath}/*.js`, `${targetPath}/*.css`],
    from: [/__UPPER_CAMEL_NAME__/g, /__LOWER_CAMEL_NAME__/g],
    to: [names.__UPPER_CAMEL_NAME__, names.__LOWER_CAMEL_NAME__]
  }

  /* Depending on the type of component that we're creating, copy from template location */
  switch (type) {
    case 'class component':
      const path = `${basePath}/${redux ? 'reduxComponent' : 'classComponent'}`
      await copy(path, targetPath)
      break
    case 'stateless component':
      await copy(`${basePath}/statelessComponent`, targetPath)
      break
    case 'styled component':
      await copy(`${basePath}/styledComponent`, targetPath)
      break
    default:
      break
  }

  /* Replace template string variables in newly created folder */
  replace.sync(options)
  console.log(`${name} created ✨`)
}

module.exports = generateComponent
