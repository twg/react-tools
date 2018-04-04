import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'
import {
  withKnobs,
  text,
  boolean,
  number,
  object,
  select
} from '@storybook/addon-knobs'
import { checkA11y } from '@storybook/addon-a11y'

import { H1, H2, H3, H4, H5, H6, P } from '../src'

export default function() {
  const stories = storiesOf('Text Components', module)
    .addDecorator(withKnobs)
    .addDecorator(checkA11y)

  stories
    .add(
      'General Overview',
      withInfo({
        text: 'Presentational spacer component',
        inline: true
      })(() => {
        return (
          <div>
            <H1>This is an awesome H1 component</H1>
            <H2>This is an awesome H2 component</H2>
            <H3>This is an awesome H3 component</H3>
            <H4>This is an awesome H4 component</H4>
            <H5>This is an awesome H5 component</H5>
            <H6>This is an awesome H6 component</H6>
            <P>This is an awesome P component</P>
          </div>
        )
      })
    )
    .add(
      'Sandbox',
      withInfo({
        inline: true
      })(() => {
        const demoText = text(
          'Text to display',
          'Lorem Ipsum something or other'
        )

        return (
          <div>
            <H1>{demoText}</H1>
            <H2>{demoText}</H2>
            <H3>{demoText}</H3>
            <H4>{demoText}</H4>
            <H5>{demoText}</H5>
            <H6>{demoText}</H6>
            <P>{demoText}</P>
          </div>
        )
      })
    )
}
