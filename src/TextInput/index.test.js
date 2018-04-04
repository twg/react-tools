/* eslint-env jest */

import React from 'react'
import TextInput from './'
import renderer from 'react-test-renderer'
import cases from 'jest-in-case'

cases(
  'matches snapshots',
  opts => {
    expect(
      renderer
        .create(
          <div style={{ width: '400px' }}>
            <TextInput {...opts.props} />
          </div>
        )
        .toJSON()
    ).toMatchSnapshot()
  },
  [
    { name: 'normal', props: {} },
    { name: 'disabled', props: { disabled: true } },
    { name: 'error', props: { error: 'This is error' } }
  ]
)
