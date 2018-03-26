const inquirer = require('inquirer')
const shell = require('shelljs')

const copy = require('./copy')

const QUESTIONS = [
  {
    type: 'input',
    name: 'name',
    message: 'What do you want to name your Component?',
    default: 'Component Name'
  },
  {
    type: 'input',
    name: 'target',
    message: "Enter where you'd like to create this component (default .)",
    default: '.'
  },
  {
    type: 'list',
    name: 'type',
    message: 'What type of component do you want to generate?',
    choices: ['Class Component', 'Stateless Component', 'Styled Component'],
    filter: function(val) {
      return val.toLowerCase()
    }
  },
  {
    type: 'list',
    name: 'redux',
    message: 'Is this Component going to be connected to redux?',
    choices: ['Yes', 'No']
  }
]

const start = () => {
  console.log('Hi, welcome to The TRT wizard')

  inquirer.prompt(QUESTIONS).then(answers => {
    switch (modifier) {
      case 'Class Component':
        shell.exec(
          `bash ${__dirname}/scripts/generateStatelessComponent.sh statelessComponent ${target}`
        )
        break
      case 'Stateless Component':
        shell.exec(
          `bash ${__dirname}/scripts/generateClassComponent.sh classComponent ${target}`
        )
        break
      case 'Styled Component':
        shell.exec(
          `bash ${__dirname}/scripts/generateClassComponent.sh classComponent ${target}`
        )
        break
      default:
        break
    }

    console.log('\nComponent to Generate:')
    console.log(JSON.stringify(answers, null, '  '))
  })
}

module.exports = { start }
