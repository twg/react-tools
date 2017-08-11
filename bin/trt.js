#! /usr/bin/env node
const shell = require('shelljs')

const ARGS = process.argv.slice(2)

const USAGE = `
  Usage:
    trt generate sc ComponentName    # Scaffold a new, empty React stateless component
    trt generate cc ComponentName    # Scaffold a new, empty React class component
    trt include ComponentName [path]        # Include a component from the Library at path
    trt storybook                           # Start Storybook on http://localhost:6006
    trt -h, --help                          # Print this message
`

const mainCommand = ARGS[0]
const modifier = ARGS[1]
const target = ARGS[2]

const help = () => {
  console.log(USAGE)
}

const generate = (modifier, target) => {
  switch (modifier) {
    case 'sc':
      shell.exec(
        `bash ${__dirname}/scripts/generateStatelessComponent.sh statelessComponent ${target ||
          ''}`
      )
      break
    case 'cc':
      shell.exec(
        `bash ${__dirname}/scripts/generateClassComponent.sh classComponent ${target ||
          ''}`
      )
      break
    default:
      break
  }
}

const include = (modifier, target) => {
  if (!modifier) {
    help()
    return
  }

  if (!target) {
    target = '.'
  }

  shell.exec(
    `bash ${__dirname}/scripts/includeComponent.sh ${modifier} ${target}`
  )
}

const storybook = () => {
  shell.exec(`npm run --prefix ${__dirname}/../ storybook`)
}
;(function main() {
  switch (mainCommand) {
    case 'generate':
    case '-g':
      generate(modifier, target)
      break
    case 'include':
    case '-i':
      include(modifier, target)
      break
    case 'storybook':
    case 'sb':
      storybook()
      break
    default:
      help()
      break
  }
})()
