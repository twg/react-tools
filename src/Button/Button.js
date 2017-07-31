import React from 'react'
import { compact } from 'lodash'

import css from './style.css'

const Button = props => {
  const classes = [
    css.button,
    props.size ? css[props.size] : '',
    props.noMargin ? css.noMargin : ''
  ]

  return (
    <button
      className={compact(classes).join(' ')}
      type={props.type || 'button'}
      onClick={props.onClick}
      style={{ background: props.color }}
    >
      {props.children}
    </button>
  )
}

Button.propTypes = {
  /**
   * This is the label of the button
   */
  children: React.PropTypes.string.isRequired,
  /**
   * Event to fire when button is clicked
   */
  onClick: React.PropTypes.func,
  /**
   * Available values: hero, primary, secondary
   */
  size: React.PropTypes.string,
  /**
   * Available values: green, grey, orange
   */
  color: React.PropTypes.string,
  /**
   * If true, applies margin: 0px property
   */
  noMargin: React.PropTypes.bool
}

export default Button
