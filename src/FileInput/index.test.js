/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'
import cases from 'jest-in-case'
import { FileInput } from './'

cases(
  'matches snapshots',
  opts => {
    expect(
      renderer.create(<FileInput {...opts.props}>Label</FileInput>).toJSON()
    ).toMatchSnapshot()
  },
  [{ name: 'primary', props: { label: <div>File input test:</div> } }]
)
