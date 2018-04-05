/* eslint-env jest */
import React from 'react'
import { Sidebar } from './'
import renderer from 'react-test-renderer'

describe('Sidebar', () => {
  it('matches snapshot', () => {
    let component = renderer.create(
      <div
        style={{ height: '300px', width: '600px', border: '1px solid grey' }}
      >
        <Sidebar>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
          <div>3</div>
        </Sidebar>
      </div>
    )

    expect(component.toJSON()).toMatchSnapshot()
  })
})
