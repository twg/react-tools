/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import { H1, H2, H3, H4, H5, H6, P } from './'

describe('Text Components', () => {
  it('matches H1 snapshot', () => {
    let component = renderer.create(
      <div>
        <H1>Testing value </H1>
      </div>
    )

    expect(component.toJSON()).toMatchSnapshot()
  })

  it('matches H2 snapshot', () => {
    let component = renderer.create(
      <div>
        <H2>Testing value </H2>
      </div>
    )

    expect(component.toJSON()).toMatchSnapshot()
  })

  it('matches H3 snapshot', () => {
    let component = renderer.create(
      <div>
        <H3>Testing value </H3>
      </div>
    )

    expect(component.toJSON()).toMatchSnapshot()
  })

  it('matches H4 snapshot', () => {
    let component = renderer.create(
      <div>
        <H4>Testing value </H4>
      </div>
    )

    expect(component.toJSON()).toMatchSnapshot()
  })

  it('matches H4 snapshot', () => {
    let component = renderer.create(
      <div>
        <H4>Testing value </H4>
      </div>
    )

    expect(component.toJSON()).toMatchSnapshot()
  })

  it('matches H5 snapshot', () => {
    let component = renderer.create(
      <div>
        <H5>Testing value </H5>
      </div>
    )

    expect(component.toJSON()).toMatchSnapshot()
  })

  it('matches H6 snapshot', () => {
    let component = renderer.create(
      <div>
        <H6>Testing value </H6>
      </div>
    )

    expect(component.toJSON()).toMatchSnapshot()
  })

  it('matches P snapshot', () => {
    let component = renderer.create(
      <div>
        <P>Testing value </P>
      </div>
    )

    expect(component.toJSON()).toMatchSnapshot()
  })
})
