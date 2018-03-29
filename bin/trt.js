const shell = require('shelljs')
const prog = require('caporal')

const componentWizard = require('./scripts/componentCreationWizard')
const appWizard = require('./scripts/appCreationWizard')
const include = require('./scripts/include')

prog.version('1.0.0')

prog
  .command('generate', 'Generate a component')
  .alias('g')
  .action(function(args, options, logger) {
    componentWizard.start()
  })

prog
  .command('create', 'Create a react app following TWG guidelines')
  .alias('c')
  .action(function(args, options, logger) {
    appWizard.start()
  })

// TODO -- get list of all folders in src and place them as args
prog
  .command('include', 'Include a component from the library')
  .alias('i')
  .argument('<name>', 'Name of existing component')
  .argument('[target]', 'Target location to place component')
  .action(async function(args, options, logger) {
    let { target, name } = args

    if (target === undefined) {
      target = '.'
    }

    await include(name, target)
    console.log(`${name} included in your project ✨`)
  })

prog
  .command('storybook', 'Start a local version of storybook')
  .alias('sb')
  .action(function() {
    shell.exec(`npm run --prefix ${__dirname}/../ storybook`)
  })

prog.parse(process.argv)
