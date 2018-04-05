/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import { Radio } from './'

const noop = () => {}
describe('Radio', () => {
  it('renders an unchecked radio button', () => {
    let component = renderer.create(
      <Radio checked={false} id="unchecked" label="Unchecked Example" />
    )

    expect(component.toJSON()).toMatchSnapshot()
  })

  it('renders an checked radio button', () => {
    let component = renderer.create(
      <Radio checked={true} id="checked" label="Checked Example" />
    )

    expect(component.toJSON()).toMatchSnapshot()
  })
})
