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

import { Combo, ComboFirst, ComboLast } from '../src/Combo'

export default function() {
  const stories = storiesOf('Combo', module)
  stories.addDecorator(withKnobs)
  stories.addWithInfo(
    'General Overview',
    `A component to allow you to have contant of variable size and have the remainder be taken up by the remaining content`,
    () => <Combo />,
    { inline: true }
  )
  // .addWithInfo(
  //   'Sandbox',
  //   'Play around',
  //   () =>
  //     <Button
  //       color={select('Color', ['grey', 'green', 'orange'], 'grey')}
  //       size={select('Size', ['hero', 'primary', 'secondary'], 'hero')}
  //       noMargin={boolean('noMargin', true)}
  //     >
  //       {text('Label', 'Hello Button')}
  //     </Button>,
  //   { inline: true, source: true, header: false }
  // )
}
