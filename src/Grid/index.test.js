/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import { Grid, GridItem } from './'

describe('Grid and GridItem', () => {
  it('Grid matches snapshot', () => {
    let component = renderer.create(<Grid />)

    expect(component.toJSON()).toMatchSnapshot()
  })

  it('Grid and GridItem matches snapshot', () => {
    let component = renderer.create(
      <Grid>
        <GridItem col="1/1" />
      </Grid>
    )

    expect(component.toJSON()).toMatchSnapshot()
  })
})
