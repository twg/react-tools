import React from 'react'
import css from './style.css'
import PropTypes from 'prop-types'

export const Spacer = props => {
  const classes = [css.spacer, props.size ? css[props.size] : ''].join(' ')

  return <div className={classes} />
}

Spacer.propTypes = {
  /**
   * Available values: small, large
   */
  size: PropTypes.string
}

export default Spacer
