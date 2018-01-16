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

import { FileInput } from '../src'

export default function() {
  const stories = storiesOf('FileInput', module)
  stories.addDecorator(withKnobs)
  stories
    .addWithInfo(
      'General Overview',
      `This is a basic button with various sizes.`,
      () => (
        <div>
          <FileInput label={'Test Label - file Upload'} />
        </div>
      ),
      { inline: true }
    )
    .addWithInfo(
      'Sandbox',
      'Play around',
      () => {
        const label = text('Label', 'Hello Button')
        const labelVal = <div dangerouslySetInnerHTML={{ __html: label }} />
        return (
          <FileInput
            label={labelVal}
            disabled={boolean('disabled', true)}
            showFilename={boolean('showFilename', true)}
          />
        )
      },

      { inline: true, source: true, header: false }
    )
}
