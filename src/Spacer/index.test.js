/* eslint-env jest */

import React from 'react'
import Spacer from './'
import renderer from 'react-test-renderer'
import cases from 'jest-in-case'

cases(
  'matches snapshots',
  opts => {
    expect(
      renderer.create(<Spacer {...opts.props} />).toJSON()
    ).toMatchSnapshot()
  },
  [
    { name: 'normal', props: { size: 'normal' } },
    { name: 'small', props: { size: 'small' } },
    { name: 'large', props: { size: 'large' } }
  ]
)
