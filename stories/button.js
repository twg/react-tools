import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import {
  withKnobs,
  text,
  boolean,
  number,
  object,
  select
} from '@storybook/addon-knobs'

import { Button } from '../src'

export default function() {
  const stories = storiesOf('Button', module)
  // stories.addDecorator(withKnobs)
  stories
    .add(
      'General Overview',
      withInfo({
        inline: true,
        text: `This is a basic button with various sizes.`
      })(() => (
        <div>
          <Button size="hero" color="green">
            Become a member
          </Button>
          <Button size="primary" color="orange">
            Register
          </Button>
          <Button size="secondary" color="grey">
            Watch
          </Button>
        </div>
      ))
    )
    .add(
      'simple usage',
      withInfo({
        inline: true,
        source: true,
        header: false,
        text: `This is the basic usage with the button with providing a label to show the text.`
      })(() => (
        <Button size="hero" onClick={action('clicked')}>
          Become a member
        </Button>
      ))
    )
    .add(
      'Sandbox',
      withInfo('Play around')(() => (
        <Button
          color={select('Color', ['grey', 'green', 'orange'], 'grey')}
          size={select('Size', ['hero', 'primary', 'secondary'], 'hero')}
          noMargin={boolean('noMargin', true)}
        >
          {text('Label', 'Hello Button')}
        </Button>
      ))
    )
}
