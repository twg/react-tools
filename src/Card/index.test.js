/* eslint-env jest */

import React from 'react'
import Card from './'
import renderer from 'react-test-renderer'
import cases from 'jest-in-case'

cases(
  'matches snapshots',
  opts => {
    expect(
      renderer
        .create(
          <div style={{ width: '400px' }}>
            <Card {...opts.props} />
          </div>
        )
        .toJSON()
    ).toMatchSnapshot()
  },
  [
    { name: 'normal', props: {} },
    { name: 'rounded', props: { rounded: true } },
    { name: 'expand', props: { expand: true } }
  ]
)
