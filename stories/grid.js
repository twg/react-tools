import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import {
  withKnobs,
  text,
  boolean,
  number,
  object,
  select
} from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'

import { Grid, GridItem } from '../src'

const gridItemStyle = {
  border: '1px solid black'
}

function getSettings(index) {
  const phabletOptions = select(
    `Column ${index + 1} phablet`,
    ['phablet1of2', 'phablet2of2'],
    'phablet1of2'
  )
  const tabletOptions = select(
    `Column ${index + 1} tablet`,
    ['tablet1of2', 'tablet2of2', 'tablet1of3', 'tablet2of3', 'tablet3of3'],
    'tablet1of2'
  )

  const mobileOptions = select(
    `Column ${index + 1} mobile`,
    ['mobile1of2', 'mobile2of2'],
    'mobile1of2'
  )

  return {
    col: text(`Column ${index + 1} col`, '1/4'),
    style: gridItemStyle,
    [tabletOptions]: true,
    [phabletOptions]: true,
    [mobileOptions]: true
  }
}

export default function() {
  const stories = storiesOf('Grid', module).addDecorator(withKnobs)
  stories.add(
    'General Overview',
    withInfo({
      text: `This is a grid component to allow for grid style layouts in react`,
      inline: true
    })(() => {
      const totalCols = number('Column amount', 4)

      let settings = []

      for (var index = 0; index < totalCols; index++) {
        settings.push(getSettings(index))
      }

      return (
        <Grid>
          {settings.map((setting, index) => {
            return <GridItem {...setting}>Column {index + 1}</GridItem>
          })}
        </Grid>
      )
    })
  )
}
