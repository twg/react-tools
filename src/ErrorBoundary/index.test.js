/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import { ErrorBoundary } from './'

const ErrorView = () => {
  return null
}

describe('Error Boundary', () => {
  it('matches snapshot', () => {
    let component = renderer.create(
      <ErrorBoundary>
        <ErrorView />
      </ErrorBoundary>
    )

    expect(component.toJSON()).toMatchSnapshot()
  })
})
