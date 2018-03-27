import { withKnobs, text } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { checkA11y } from '@storybook/addon-a11y'

import { InlineEdit } from '../src'
import StoryContainer from './storyContainer'

export default function() {
  const stories = storiesOf('Inline Edit', module)
    .addDecorator(withKnobs)
    .addDecorator(checkA11y)

  stories.add(
    'Basic Usage',
    withInfo({
      text: `This is a text field, when you edit and press save it fires an onChange prop with the new text passed as an argument`,
      inline: true
    })(() => {
      const editableText = text('originalText', 'Lorem Ipsum')
      return (
        <StoryContainer>
          <InlineEdit
            originalText={editableText}
            onChange={text => alert(text)}
          />
        </StoryContainer>
      )
    })
  )
}
