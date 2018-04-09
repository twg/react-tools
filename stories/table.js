import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'
import {
  withKnobs,
  text,
  boolean,
  number,
  object,
  select
} from '@storybook/addon-knobs'
import { checkA11y } from '@storybook/addon-a11y'

import { Table } from '../src'

const data = [
  { name: 'Scott', power: 'lazers (pew pew)', cool: 'no' },
  { name: 'James', power: 'healing', cool: 'yes' },
  { name: 'Jean', power: 'firebirds', cool: 'yes' },
  { name: 'Hank', power: 'being blue', cool: 'no' },
  { name: 'Xavier', power: 'brains', cool: 'yes' }
]

export default function() {
  const stories = storiesOf('Tables/Normal Table', module)
    .addDecorator(withKnobs)
    .addDecorator(checkA11y)

  stories.add(
    'General Overview',
    withInfo({
      text: 'A series table components ',
      inline: true
    })(() => {
      return <Table data={data} />
    })
  )
}
