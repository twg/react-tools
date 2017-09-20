/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import { Welcome } from './'

describe('Welcome', () => {
  it('matches snapshot', () => {
    let component = renderer.create(
      <Welcome />
    )

    expect(component.toJSON()).toMatchSnapshot()
  })
})
