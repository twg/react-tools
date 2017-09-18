import React from 'react'

import { storiesOf } from '@storybook/react'
import {
  withKnobs,
  text,
  boolean,
  number,
  object,
  select
} from '@storybook/addon-knobs'

import { Tooltip } from '../src'

export default function() {
  const stories = storiesOf('Tooltip', module)
  stories.addDecorator(withKnobs)
  stories.addWithInfo(
    'General Overview',
    `A tooltip component that can display any kind of content`,
    () => {
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
    },
    { inline: true }
  )
}
