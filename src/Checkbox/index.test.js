/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import { Checkbox } from './'

const noop = () => {}
describe('Checkbox', () => {
  it('renders an unchecked checkbox', () => {
    let component = renderer.create(
      <Checkbox
        value={false}
        onChange={noop}
        id="unchecked"
        label="Unchecked Example"
      />
    )

    expect(component.toJSON()).toMatchSnapshot()
  })

  it('renders an checked checkbox', () => {
    let component = renderer.create(
      <Checkbox
        value={true}
        onChange={noop}
        id="checked"
        label="Checked Example"
      />
    )

    expect(component.toJSON()).toMatchSnapshot()
  })
})
