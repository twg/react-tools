/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import { SmartTable, Table } from './'

const data = [
  { name: 'Scott', power: 'lazers (pew pew)', cool: 'no' },
  { name: 'James', power: 'healing', cool: 'yes' },
  { name: 'Jean', power: 'firebirds', cool: 'yes' },
  { name: 'Hank', power: 'being blue', cool: 'no' },
  { name: 'Xavier', power: 'brains', cool: 'yes' }
]

describe('Table', () => {
  it('matches snapshot', () => {
    let component = renderer.create(<Table data={data} />)

    expect(component.toJSON()).toMatchSnapshot()
  })
})

describe('SmartTable', () => {
  it('matches snapshot', () => {
    let component = renderer.create(<SmartTable data={data} />)

    expect(component.toJSON()).toMatchSnapshot()
  })
})
