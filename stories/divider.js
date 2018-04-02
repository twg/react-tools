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

import { Divider, VerticalDivider } from '../src'

export default function() {
  const stories = storiesOf('Divider', module).addDecorator(checkA11y)

  stories.add(
    'General Overview',
    withInfo({
      text: 'Presentational divider components',
      inline: true
    })(() => {
      return (
        <div>
          <div
            style={{
              height: '35px',
              display: 'flex',
              alignItems: 'center',
              margin: '5px'
            }}
          >
            <span>This is before a VerticalDivider </span>
            <VerticalDivider />
            <span>This is more text on the right </span>
          </div>
          <Divider />
          <div style={{ margin: '5px' }}>
            And this is under a normal divider
          </div>
        </div>
      )
    })
  )
}
