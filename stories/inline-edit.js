import { withKnobs, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { InlineEdit } from '../src'

export default function() {
  const stories = storiesOf('Inline Edit', module)
  stories.addDecorator(withKnobs)
  stories.addWithInfo(
    'Inline Edit',
    `This is a text field, when you edit and press save it fires an onChange prop`,
    () => {
      const editableText = text('originalText', 'Lorem Ipsum')
      return (
        <InlineEdit
          originalText={editableText}
          onChange={function(title) {
            alert('title')
          }}
        />
      )
    },
    { inline: true }
  )
}
