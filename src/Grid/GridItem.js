import React from 'react'
import PropTypes from 'prop-types'

import Styles from './style.css'

const GridItem = props => {
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
    ].map(property => (props[property] ? Styles[property] : null))
  ].join(' ')

  return (
    <div className={classes} style={{ width: `${percent}%`, ...props.style }}>
      {props.children}
    </div>
  )
}

GridItem.propTypes = {
  /**
  * A string with the calculation for how wide the column should be:
  * ie: 1/4 will be 25%, 4/8 will make a 50% column
  */
  col: PropTypes.string.isRequired,
  /**
  * If this is set, the width will be 100% on tablet (521px - 768px)
  */
  tablet1of1: PropTypes.bool,
  /**
  * If this is set, the width will be 50% on tablet (521px - 768px)
  */
  tablet1of2: PropTypes.bool,
  /**
  * If this is set, the width will be 33% on tablet(521px - 768px)
  */
  tablet1of3: PropTypes.bool,
  /**
  * If this is set, the width will be 66% on tablet (521px - 768px)
  */
  tablet2of3: PropTypes.bool,
  /**
  * If this is set, the width will be 50% on phablet (521px - 700px)
  */
  phablet1of2: PropTypes.bool,
  /**
  * If this is set, the width will be 100% on phablet (521px - 700px)
  */
  phablet1of1: PropTypes.bool,
  /**
  * If this is set, the width will be 100% on mobile (520px or less)
  */
  mobile1of1: PropTypes.bool,
  /**
  * If this is set, the width will be 50% on mobile (520px or less)
  */
  mobile1of2: PropTypes.bool,
  /**
  * A style object that inlines the style to the containing element
  */
  style: PropTypes.object
}

export default GridItem
