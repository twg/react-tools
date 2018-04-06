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

import { TopNav } from '../src'

export default function() {
  const stories = storiesOf('TopNav', module).addDecorator(checkA11y)

  stories
    .add(
      'General Overview',
      withInfo({
        text: 'A responsive TopNav component',
        inline: true,
        header: false
      })(() => {
        return (
          <div
            style={{ height: '300px', width: '100%', border: '1px solid grey' }}
          >
            <TopNav
              left={
                <img
                  src="https://twg.io/954c24bb4bbfe909730f85f6c55c8e9e.svg"
                  width="175px"
                />
              }
              center={<h4>Page Title</h4>}
              links={['item', 'item2']}
              right={
                <img
                  class="avatar js-action-profile-avatar"
                  src="https://pbs.twimg.com/profile_images/608742547272290304/vl4pXqqG_bigger.png"
                  style={{ borderRadius: '50%', height: '58px' }}
                  alt=""
                />
              }
            />
          </div>
        )
      })
    )
    .add(
      'Responsive',
      withInfo({
        text: 'A responsive TopNav component',
        inline: true,
        header: false
      })(() => {
        return (
          <div
            style={{
              height: '300px',
              maxWidth: '740px',
              width: '100%',
              border: '1px solid grey'
            }}
          >
            <TopNav
              left={
                <img
                  src="https://twg.io/954c24bb4bbfe909730f85f6c55c8e9e.svg"
                  width="175px"
                />
              }
              center={<h4>Page Title</h4>}
              links={['item', 'item2', 'item2', 'item2', 'item2']}
              right={
                <img
                  class="avatar js-action-profile-avatar"
                  src="https://pbs.twimg.com/profile_images/608742547272290304/vl4pXqqG_bigger.png"
                  style={{ borderRadius: '50%', height: '58px' }}
                  alt=""
                />
              }
            />
          </div>
        )
      })
    )
}
