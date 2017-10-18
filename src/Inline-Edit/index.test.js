/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import { InlineEdit } from './'

const noop = () => {}
describe('InlineEdit', () => {
  it('matches snapshot', () => {
    let component = renderer.create(
      <InlineEdit originalText="foo" onChange={noop} />
    )

    expect(component.toJSON()).toMatchSnapshot()
  })
})
