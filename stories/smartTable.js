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

import { Table, TableBody, TableData, TableHead, TableRow } from '../src'

export default function() {
  const stories = storiesOf('Smart Table', module)
    .addDecorator(withKnobs)
    .addDecorator(checkA11y)

  stories.add(
    'General Overview',
    withInfo({
      text: 'A series table components ',
      inline: true
    })(() => {
      return (
        <Table>
          <TableHead>
            <TableRow>
              <TableData>Hi!</TableData>
            </TableRow>
          </TableHead>
        </Table>
      )
    })
  )
}
