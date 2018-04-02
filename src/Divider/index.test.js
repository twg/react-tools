/* eslint-env jest */

import React from 'react'
import { Divider, VerticalDivider } from './'
import renderer from 'react-test-renderer'

describe('Divider', () => {
  it('matches snapshot', () => {
    let component = renderer.create(
      <div>
        <div />
        <Divider />
        <div />
      </div>
    )

    expect(component.toJSON()).toMatchSnapshot()
  })
})

describe('VerticalDivider', () => {
  it('matches snapshot', () => {
    let component = renderer.create(
      <div>
        <span />
        <Divider />
        <span />
      </div>
    )

    expect(component.toJSON()).toMatchSnapshot()
  })
})
