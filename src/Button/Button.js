import React from 'react'
import { compact } from 'lodash'

import css from './style.scss'

const Button = (props) => {
  const classes = [
    css.button,
    props.size ? css[props.size] : '',
    props.color ? css[props.color] : '',
    props.noMargin ? css.noMargin : ''
  ]

  return (
    <button
      className={compact(classes).join(' ')}
      type={props.type || 'button'}
      onClick={props.onClick}
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
  type: React.PropTypes.string,
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
