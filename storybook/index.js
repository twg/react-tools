import React from 'react'

import { storiesOf } from '@storybook/react'
import { linkTo } from '@storybook/addon-links'

import { Welcome } from '../src/Welcome'
import * as stories from '../stories'

storiesOf('Welcome', module).add('to Storybook', () =>
  <Welcome showApp={linkTo('Button')} />
)

for (let story in stories) {
  stories[story]()
}
