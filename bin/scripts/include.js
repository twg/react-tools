const copy = require('./copy')

const include = (name, target) => {
  const targetLocation = `${target}/${name}`
  const componentLocation = `${__dirname}/../../src/${name}`

  return copy(componentLocation, targetLocation)
}

module.exports = include
