const fs = require('fs-extra')

const copy = (location, target) =>
  fs
    .copy(location, target)
    .then(() => console.log('success!'))
    .catch(err => console.error(err))

module.exports = copy
