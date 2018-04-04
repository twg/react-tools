import React, { Component } from 'react'
import css from './style.css'
import PropTypes from 'prop-types'

const getClasses = props => {
  const classes = [css.card]
  if (props.expand) classes.push(css.expand)
  if (props.rounded) classes.push(css.rounded)
  return classes.join(' ')
}

export const Card = props => {
  return <div className={getClasses(props)}>{props.children}</div>
}

Card.propTypes = {
  /**
   * Determines whether to stretch the card to its container's full width
   */
  expand: PropTypes.bool,
  /**
   * Determines whether the borders of the card should be rounded
   */
  rounded: PropTypes.bool
}

export default Card
