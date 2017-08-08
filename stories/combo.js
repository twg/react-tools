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
    'A component to allow you to have content of variable size and have the remainder be taken up by the remaining content',
    () =>
      <Combo>
        <ComboFirst>
          <img
            src="https://twg.io/954c24bb4bbfe909730f85f6c55c8e9e.svg"
            width="500px"
          />
        </ComboFirst>
        <ComboLast>
          Software is the most powerful tool to drive business value. We build
          end-to-end web and mobile applications for willing innovators and
          their customers.
        </ComboLast>
      </Combo>,
    { inline: true }
  )
}
