/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'

import Toggler from './'

describe('Toggler', () => {
  it('matches snapshot', () => {
    const toggler = <Toggler more="more">Text</Toggler>
    let wrapper = renderer.create(toggler).toJSON()
    expect(wrapper).toMatchSnapshot()
  })
})
