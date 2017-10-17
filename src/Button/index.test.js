/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'
import cases from 'jest-in-case'
import { Button } from './'

cases(
  'matches snapshots',
  opts => {
    expect(
      renderer.create(<Button {...opts.props}>Label</Button>).toJSON()
    ).toMatchSnapshot()
  },
  [
    { name: 'primary', props: { size: 'primary', color: 'orange' } },
    { name: 'hero', props: { size: 'hero', color: 'orange' } },
    { name: 'secondary', props: { size: 'secondary', color: 'orange' } },
    {
      name: 'noMargin',
      props: { size: 'primary', color: 'orange', noMargin: true }
    }
  ]
)
