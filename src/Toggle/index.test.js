/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import { Toggle } from './'

const noop = () => {}
describe('Toggle', () => {
  it('renders an untoggled toggle', () => {
    let component = renderer.create(
      <Toggle
        onChange={noop}
        leftLabel="Unchecked Example"
        rightLabel="Unchecked Example"
      />
    )

    expect(component.toJSON()).toMatchSnapshot()
  })

  it('renders a toggled toggle', () => {
    let component = renderer.create(
      <Toggle
        onChange={noop}
        leftLabel="Unchecked Example"
        rightLabel="Unchecked Example"
        initialValue={true}
      />
    )

    expect(component.toJSON()).toMatchSnapshot()
  })
})
