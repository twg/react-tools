import { configure, setAddon, addDecorator } from '@storybook/react'
import infoAddon from '@storybook/addon-info'

setAddon(infoAddon)

function loadStories() {
  require('../storybook')
}

configure(loadStories, module)
