const inquirer = require('inquirer')
const shell = require('shelljs')

const generateComponent = require('./generateComponent')

const QUESTIONS = [
  {
    type: 'input',
    name: 'name',
    message: 'What do you want to name your Component?',
    default: 'Component Name',
    filter: function(val) {
      return val.toLowerCase()
    },
    validate: function(value) {
      if (value !== 'Component Name') {
        return true
      }

      return 'Please enter a desired component name'
    }
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
    message: 'Do you want this component connected to redux?',
    choices: ['Yes', 'No'],
    when: function(answers) {
      return answers.type === 'class component'
    },
    filter: function(val) {
      return val.toLowerCase() === 'yes'
    }
  }
]

const start = () => {
  console.log('Hiya, welcome to The TRT wizard')

  inquirer.prompt(QUESTIONS).then(answers => {
    // Leaving these here for future debugging
    // console.log('\nComponent to Generate:')
    // console.log(JSON.stringify(answers, null, '  '))

    generateComponent(answers)
  })
}

module.exports = { start }
