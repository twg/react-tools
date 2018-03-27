import { configure, setAddon } from '@storybook/react'

import infoAddon from '@storybook/addon-info'

setAddon(infoAddon)

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
