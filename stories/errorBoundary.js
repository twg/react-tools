import React, { Component } from 'react'
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
import { withInfo } from '@storybook/addon-info'

import { ErrorBoundary } from '../src'

class Broken extends Component {
  constructor(props) {
    super(props)
    this.state = { error: false }
  }

  throwErrorInRender() {
    throw new Error('YOLO')
  }

  render() {
    return (
      <div>
        <button onClick={e => this.setState({ throw: true })}>
          Button will throw error
        </button>

        {this.state.throw ? this.throwErrorInRender() : <span />}
      </div>
    )
  }
}

export default function() {
  const stories = storiesOf('ErrorBoundary', module)

  // stories.addDecorator(withKnobs)
  stories.add(
    'General Overview',
    withInfo({
      text: `This is a generic error boundary component to wrap other components. (Note: After 
      triggering the error in storybook, you'll have to refresh to reset it.)`,
      inline: true
    })(() => (
      <div>
        <ErrorBoundary>
          <Broken />
        </ErrorBoundary>
      </div>
    ))
  )
}
