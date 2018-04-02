import React from 'react'
import css from './style.css'
import PropTypes from 'prop-types'

const getClasses = props => {
  const classes = [css.badge]
  if (props.rounded) classes.push(css.rounded)
  if (props.secondary) classes.push(css.secondary)
  if (props.caution) classes.push(css.caution)
  if (props.error) classes.push(css.error)
  return classes.join(' ')
}

export const Badge = props => (
  <div className={getClasses(props)}>{props.label}</div>
)

Badge.propTypes = {
  /**
   * Determines whether the borders of the card should be rounded
   */
  rounded: PropTypes.bool,
  /**
   * Value to display inside the badge
   */
  label: PropTypes.string,
  /**
   * A modifier to change styling to be a secondary badge
   */
  secondary: PropTypes.bool,
  /**
   * A modifier to change styling to be a caution badge
   */
  caution: PropTypes.bool,
  /**
   * A modifier to change styling to be an error badge
   */
  error: PropTypes.bool
}

export default Badge
