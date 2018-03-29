import React, { Component } from 'react'
import css from './style.css'

const getClasses = props => {
  const classes = [css.card]
  if (props.expand) classes.push(css.expand)
  if (props.rounded) classes.push(css.rounded)
  return classes.join(' ')
}

export const Card = props => {
  return <div className={getClasses(props)}>{props.children}</div>
}

Card.propTypes = {}

export default Card
