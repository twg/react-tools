/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import { Tooltip } from './'

describe('Tooltip', () => {
  it('matches snapshot', () => {
    let component = renderer.create(<Tooltip />)

    expect(component.toJSON()).toMatchSnapshot()
  })
})
