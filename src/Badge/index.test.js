/* eslint-env jest */

import React from 'react'
import Badge from './'
import renderer from 'react-test-renderer'
import cases from 'jest-in-case'

cases(
  'matches snapshots',
  opts => {
    expect(
      renderer
        .create(
          <div style={{ width: '400px' }}>
            <Badge {...opts.props} />
          </div>
        )
        .toJSON()
    ).toMatchSnapshot()
  },
  [
    { name: 'normal', props: { label: 'Wow!' } },
    { name: 'rounded', props: { label: 'Wow!', rounded: true } },
    { name: 'secondary', props: { label: 'Wow!', secondary: true } },
    { name: 'caution', props: { label: 'Wow!', caution: true } },
    { name: 'error', props: { label: 'Wow!', error: true } }
  ]
)
