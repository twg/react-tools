import React from 'react'
import Styles from './style.css'

import GridItem from './GridItem'

const Grid = props => {
  const classes = [
    Styles.grid,
    props.noGutter ? Styles.noGutter : '',
    props.narrowGutter ? Styles.narrowGutter : '',
    props.className || ''
  ].join(' ')

  return <div className={classes}>{props.children}</div>
}

export { Grid, GridItem }
