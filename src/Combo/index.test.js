/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import { Combo } from './'

describe('Combo', () => {
  it('matches snapshot', () => {
    let component = renderer.create(
      <Combo />
    )

    expect(component.toJSON()).toMatchSnapshot()
  })
})
