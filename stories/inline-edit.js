import { withKnobs, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { InlineEdit } from '../src'
import StoryContainer from './storyContainer'

export default function() {
  const stories = storiesOf('Inline Edit', module)
  stories.addDecorator(withKnobs)
  stories.addWithInfo(
    'Basic Usage',
    `This is a text field, when you edit and press save it fires an onChange prop with the new text passed as an argument`,
    () => {
      const editableText = text('originalText', 'Lorem Ipsum')
      return (
        <StoryContainer>
          <InlineEdit
            originalText={editableText}
            onChange={text => alert(text)}
          />
        </StoryContainer>
      )
    },
    { inline: true }
  )
}
