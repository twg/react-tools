/* eslint-env jest */

import React, { Component } from 'react'
import renderer from 'react-test-renderer'
import { ErrorBoundary } from './'

class ErrorView extends Component {
  throwErrorInRender() {
    throw new Error('YOLO')
  }

  render() {
    return <div>{this.throwErrorInRender()}</div>
  }
}

describe('Error Boundary', () => {
  it('matches snapshot', () => {
    let component
    component = renderer.create(
      <ErrorBoundary>
        <ErrorView />
      </ErrorBoundary>
    )

    expect(component.toJSON()).toMatchSnapshot()
  })
})
