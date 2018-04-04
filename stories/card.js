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

import { Card } from '../src'

export default function() {
  const stories = storiesOf('Card', module)
    .addDecorator(withKnobs)
    .addDecorator(checkA11y)

  stories
    .add(
      'General Overview',
      withInfo({
        text: 'A presentational card component',
        inline: true
      })(() => {
        return (
          <Card>
            <div>
              <img src="https://twg.io/954c24bb4bbfe909730f85f6c55c8e9e.svg" />
            </div>
          </Card>
        )
      })
    )
    .add(
      'Expand',
      withInfo({
        text: `When the expand property is included the card will take up 100% width`,
        inline: true
      })(() => {
        return (
          <Card expand>
            <div>
              Software is the most powerful tool to drive business value. We
              build end-to-end web and mobile applications for willing
              innovators and their customers.
            </div>
          </Card>
        )
      })
    )
    .add(
      'Rounded',
      withInfo({
        text: `When the rounded property is included the card will have rounded corners`,
        inline: true
      })(() => {
        return (
          <Card rounded>
            <div>
              <img src="https://twg.io/954c24bb4bbfe909730f85f6c55c8e9e.svg" />
            </div>
          </Card>
        )
      })
    )
    .add(
      'Sandbox',
      withInfo({
        inline: true
      })(() => {
        const expand = boolean('Expand', false)
        const rounded = boolean('Rounded', false)

        const containerValue = text(
          'Value in card (Can be html)',
          `<h1>Card!</h2>`
        )
        const CardContent = () => (
          <div dangerouslySetInnerHTML={{ __html: containerValue }} />
        )

        return (
          <Card expand={expand} rounded={rounded}>
            <CardContent />
          </Card>
        )
      })
    )
}
