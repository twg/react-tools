import React from 'react'

import { storiesOf, addDecorator } from '@storybook/react'
import {
  withKnobs,
  text,
  boolean,
  number,
  object,
  select
} from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { checkA11y } from '@storybook/addon-a11y'

import { TextInput } from '../src'

export default function() {
  const stories = storiesOf('TextInput', module)
    .addDecorator(withKnobs)
    .addDecorator(checkA11y)

  stories
    .add(
      'General Overview',
      withInfo({
        text: `A text input component with multiple states and an error message`,
        inline: true
      })(() => {
        return (
          <div style={{ margin: '50px' }}>
            <TextInput label="Demo input" />
          </div>
        )
      })
    )
    .add(
      'Disabled',
      withInfo({
        text: `When the disabled property is included the styling is slightly changed, and the input is also disabled`,
        inline: true
      })(() => {
        return (
          <div style={{ margin: '50px' }}>
            <TextInput disabled value={'disabled val'} label="Demo input" />
          </div>
        )
      })
    )
    .add(
      'Error State',
      withInfo({
        text: `When the error property is included the styling is changed, and the error value is displayed`,
        inline: true
      })(() => {
        return (
          <div style={{ margin: '50px' }}>
            <TextInput error={'Invalid value'} label="Demo input" />
          </div>
        )
      })
    )
    .add(
      'Sandbox',
      withInfo({
        text: `Sandbox`,
        inline: true
      })(() => {
        const disabled = boolean('disabled', false)
        const error = text('error')
        const label = text('label', 'This is a label')

        return (
          <div style={{ margin: '50px' }}>
            <TextInput disabled={disabled} error={error} label={label} />
          </div>
        )
      })
    )
}
