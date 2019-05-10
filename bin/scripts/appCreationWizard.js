const inquirer = require('inquirer')
const shell = require('shelljs')

const generateApp = require('./generateApp')

const QUESTIONS = [
  {
    type: 'input',
    name: 'name',
    message: 'What do you want to name your App?',
    default: 'My Awesome App',
    filter: function(val) {
      return val.toLowerCase()
    },
    validate: function(value) {
      if (value !== 'My Awesome App') {
        return true
      }

      return 'Please enter your _actual_ app name'
    }
  },
  {
    type: 'input',
    name: 'target',
    message: "Enter where you'd like to create your app (default .)",
    default: '.'
  },
  // Commenting this out; since the template is pretty heavily using modules
  // {
  //   type: 'list',
  //   name: 'styled',
  //   message: 'Is this app going to use styled-components?',
  //   choices: ['Yes', 'No'],
  //   filter: function(val) {
  //     return val.toLowerCase() === 'yes'
  //   }
  // },
  {
    type: 'list',
    name: 'prettier',
    message: 'Do you want prettier set up?',
    choices: ['Yes', 'No'],
    filter: function(val) {
      return val.toLowerCase() === 'yes'
    }
  },
  {
    type: 'list',
    name: 'travis',
    message: 'Do you want travis set up?',
    choices: ['Yes', 'No'],
    filter: function(val) {
      return val.toLowerCase() === 'yes'
    }
  },
  {
    type: 'list',
    name: 'ts',
    message: 'Do you want typescript set up?',
    choices: ['Yes', 'No'],
    filter: function(val) {
      return val.toLowerCase() === 'yes'
    }
  },
]

const start = () => {
  console.log('Hiya, welcome to The TRT wizard')

  inquirer.prompt(QUESTIONS).then(answers => {
    // Leaving these here for future debugging
    // console.log('\nApp to Generate:')
    // console.log(JSON.stringify(answers, null, '  '))

    generateApp(answers)
  })
}

module.exports = { start }
