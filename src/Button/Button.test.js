/* eslint-env jest */
import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'

import Button from './Button'

it('matches snapshot', () => {
  let wrapper = mount(
    <Button size='primary' color='orange'>Register</Button>
  )

  expect(toJson(wrapper)).toMatchSnapshot()
})
