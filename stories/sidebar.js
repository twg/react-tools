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

import { Sidebar } from '../src'

export default function() {
  const stories = storiesOf('Sidebar', module).addDecorator(checkA11y)

  stories.add(
    'General Overview',
    withInfo({
      text:
        'Presentational Sidebar component - typically used for side nav, or menu lists',
      inline: true,
      header: false
    })(() => {
      return (
        <div
          style={{ height: '300px', width: '600px', border: '1px solid grey' }}
        >
          <Sidebar>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>3</div>
            <div>3</div>
            <div>3</div>
            <div>3</div>
            <div>3</div>
            <div>3</div>
            <div>3</div>
            <div>3</div>
            <div>3</div>
            <div>3</div>
            <div>3</div>
          </Sidebar>
        </div>
      )
    })
  )
}
