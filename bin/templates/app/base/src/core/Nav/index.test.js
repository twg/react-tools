/* eslint-env jest */

import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'

import Nav from './'

describe('Nav', () => {
  it('matches snapshot', () => {
    const nav = (
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    )
    let wrapper = renderer.create(nav).toJSON()
    expect(wrapper).toMatchSnapshot()
  })
})
