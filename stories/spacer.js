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

import { Spacer } from '../src'

export default function() {
  const stories = storiesOf('Spacer', module)
    .addDecorator(withKnobs)
    .addDecorator(checkA11y)

  stories
    .add(
      'General Overview',
      withInfo({
        text: 'Presentational spacer component',
        inline: true
      })(() => {
        return (
          <div>
            <div
              style={{
                height: '35px',
                margin: '5px',
                border: '1px solid black'
              }}
            >
              This is some content before a normal spacer
            </div>
            {/* This is the part that matters */}
            <Spacer />
            <div
              style={{
                height: '35px',
                margin: '5px',
                border: '1px solid black'
              }}
            >
              This is some content after a normal spacer
            </div>
          </div>
        )
      })
    )
    .add(
      'Sizes',
      withInfo({
        text: `When the size property is included, the height of the spacer is changed`,
        inline: true
      })(() => {
        return (
          <div>
            <div
              style={{
                height: '35px',
                margin: '5px',
                border: '1px solid black'
              }}
            >
              This is some content before a small spacer
            </div>
            {/* This is the part that matters */}
            <Spacer size="small" />
            <div
              style={{
                height: '35px',
                margin: '5px',
                border: '1px solid black'
              }}
            >
              This is some content after a small spacer
            </div>
            <div
              style={{
                height: '35px',
                margin: '5px',
                border: '1px solid black'
              }}
            >
              This is some content before a large spacer
            </div>
            {/* This is the part that matters */}
            <Spacer size="large" />
            <div
              style={{
                height: '35px',
                margin: '5px',
                border: '1px solid black'
              }}
            >
              This is some content after a large spacer
            </div>
          </div>
        )
      })
    )
    .add(
      'Sandbox',
      withInfo({
        inline: true
      })(() => {
        const size = select('Size', ['normal', 'small', 'large'], 'normal')

        return (
          <div>
            <div
              style={{
                height: '35px',
                margin: '5px',
                border: '1px solid black'
              }}
            >
              This is some content before a {size} spacer
            </div>
            {/* This is the part that matters */}
            <Spacer size={size} />
            <div
              style={{
                height: '35px',
                margin: '5px',
                border: '1px solid black'
              }}
            >
              This is some content after a {size} spacer
            </div>
          </div>
        )
      })
    )
}
