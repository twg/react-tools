import React from 'react'
import PropTypes from 'prop-types'

import Styles from './style.css'

const GridItem = (props) => {
  const { col } = props
  const columns = col.split('/')
  const percent = columns[0] / columns[1] * 100

  const classes = [
    Styles.gridItem,
    props.className || '',
    ...[
      'tablet1of1',
      'tablet1of2',
      'tablet1of3',
      'tablet2of3',
      'phablet1of1',
      'phablet1of2',
      'mobile1of1',
      'mobile1of2'
    ].map(property => (
      props[property] ? Styles[property] : null
    ))
  ].join(' ')

  return (
    <div className={classes} style={{width: `${percent}%`}}>
      {props.children}
    </div>
  )
}

GridItem.propTypes = {
  col: PropTypes.string.isRequired,
  tablet1of1: PropTypes.bool,
  tablet1of2: PropTypes.bool,
  tablet1of3: PropTypes.bool,
  tablet2of3: PropTypes.bool,
  phablet1of2: PropTypes.bool,
  phablet1of1: PropTypes.bool,
  mobile1of1: PropTypes.bool,
  mobile1of2: PropTypes.bool
}

export default GridItem

