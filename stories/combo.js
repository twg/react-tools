import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import {
  withKnobs,
  text,
  boolean,
  number,
  object,
  select
} from '@storybook/addon-knobs'

import { Combo, ComboFirst, ComboLast } from '../src'

export default function() {
  const stories = storiesOf('Combo', module)
  stories.addDecorator(withKnobs)
  stories.addWithInfo(
    'General Overview',
    'A component that allows content of variable size and have the remainder be taken up by the remaining content',
    () => {
      const combo1Width = number('Image Width', 500)

      return (
        <Combo>
          <ComboFirst>
            <img
              src="https://twg.io/954c24bb4bbfe909730f85f6c55c8e9e.svg"
              style={{ width: combo1Width + 'px' }}
            />
          </ComboFirst>
          <ComboLast>
            Software is the most powerful tool to drive business value. We build
            end-to-end web and mobile applications for willing innovators and
            their customers.
          </ComboLast>
        </Combo>
      )
    },
    { inline: true }
  )
  stories.addWithInfo(
    'Reverse',
    () => {
      const comboLastWidth = number('Image Width', 500)
      return (
        <Combo rev={true}>
          <ComboFirst>
            Software is the most powerful tool to drive business value. We build
            end-to-end web and mobile applications for willing innovators and
            their customers.
          </ComboFirst>
          <ComboLast>
            <img
              src="https://twg.io/954c24bb4bbfe909730f85f6c55c8e9e.svg"
              style={{ width: comboLastWidth + 'px' }}
            />
          </ComboLast>
        </Combo>
      )
    },
    { inline: true }
  )
  stories.addWithInfo(
    'Sandbox',
    () => {
      const rev = boolean('Reverse Flex', false)

      const widthVar = number('Width of primary content', 500)

      const combo1Content = text(
        'ComboFirst Content',
        `<img src="https://twg.io/954c24bb4bbfe909730f85f6c55c8e9e.svg"/>`
      )
      const comboFirstVal = (
        <div
          dangerouslySetInnerHTML={{ __html: combo1Content }}
          style={{ width: rev ? '' : widthVar + 'px' }}
        />
      )

      const combo2Content = text(
        'ComboLast Content',
        `Software is the most powerful tool to drive business value. We build
            end-to-end web and mobile applications for willing innovators and
            their customers.`
      )
      const comboLastVal = (
        <div
          dangerouslySetInnerHTML={{ __html: combo2Content }}
          style={{ width: rev ? widthVar + 'px' : '' }}
        />
      )

      return (
        <Combo rev={rev}>
          <ComboFirst>{comboFirstVal}</ComboFirst>
          <ComboLast>{comboLastVal}</ComboLast>
        </Combo>
      )
    },
    { inline: true }
  )
}
