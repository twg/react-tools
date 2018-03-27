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

import { Tooltip } from '../src'

export default function() {
  const stories = storiesOf('Tooltip', module)
    .addDecorator(withKnobs)
    .addDecorator(checkA11y)

  stories.add(
    'General Overview',
    withInfo({
      text: `A tooltip component that can display any kind of content`,
      inline: true
    })(() => {
      const tooltipContent = text('content', '<div>Hiii</div>')
      const renderedVal = (
        <div dangerouslySetInnerHTML={{ __html: tooltipContent }} />
      )

      return (
        <div style={{ margin: '50px' }}>
          <div>{`Value passed into tooltip's content: ${tooltipContent}`}</div>
          <Tooltip content={renderedVal}>Hover me</Tooltip>
        </div>
      )
    })
  )
}
