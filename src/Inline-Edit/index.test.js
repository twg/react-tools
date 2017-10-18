/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import { InlineEdit } from './'

describe('InlineEdit', () => {
  it('matches snapshot', () => {
    let component = renderer.create(<InlineEdit />)

    expect(component.toJSON()).toMatchSnapshot()
  })
})
