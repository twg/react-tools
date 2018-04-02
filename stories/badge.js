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

import { Badge } from '../src'

export default function() {
  const stories = storiesOf('Badge', module)
    .addDecorator(withKnobs)
    .addDecorator(checkA11y)

  stories
    .add(
      'General Overview',
      withInfo({
        text: 'A presentational badge component with multiple states',
        inline: true
      })(() => {
        return (
          <div>
            <div>
              <p style={{ display: 'inline-block' }}>
                Look at this label!
              </p>{' '}
              <Badge label="New!" />
            </div>
            <div>
              <Badge secondary label="Secondary" />
            </div>
            <div>
              <Badge caution label="Caution" />
            </div>
            <div>
              <Badge error label="Error" />
            </div>
          </div>
        )
      })
    )
    .add(
      'Rounded',
      withInfo({
        text: `When the rounded property is included the badge will have rounded corners`,
        inline: true
      })(() => {
        return <Badge rounded label="New!" />
      })
    )
    .add(
      'Sandbox',
      withInfo({
        inline: true
      })(() => {
        const rounded = boolean('Rounded', false)
        const modifier = select(
          'Modifier',
          ['none', 'secondary', 'caution', 'error'],
          'none'
        )

        return (
          <Badge
            rounded={rounded}
            {...{ [modifier]: true }}
            label={text('Value in badge', `Badge!`)}
          />
        )
      })
    )
}
