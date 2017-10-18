import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { classList } from '../utils'
import css from './style.css'

class Checkbox extends Component {
  render() {
    const { value, label, id, onChange, disabled } = this.props
    const containerClass = classList([
      css.checkBoxContainer,
      disabled ? 'disabled' : ''
    ])
    return (
      <div className={containerClass}>
        <label htmlFor={id} className={css.labelCheckbox}>
          <input
            name={id}
            type="checkbox"
            className={css.invisible}
            disabled={disabled}
            checked={value}
            onChange={onChange}
          />
          <div className={css.checkbox}>
            <svg width="20px" height="20px" viewBox="0 0 20 20">
              <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z" />
              <polyline points="4 11 8 15 16 6" />
            </svg>
          </div>
          <span>{label}</span>
        </label>
      </div>
    )
  }
}

Checkbox.propTypes = {
  /**
   * This is the name of the checkbox, you need this for the label and input to be linked
   */
  id: PropTypes.string.isRequired,
  /**
   * This is the label of the button
   */
  label: PropTypes.string.isRequired,
  /**
   * Event to fire when checkbox changes, passes the checkbox value as
   * an argument onChange={value => handleNewValue(value)}
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Whether the value is checked or not. Available values: true, false
   */
  value: PropTypes.bool,
  /**
   * Makes the checkbox disabled. Available values: true, false
   */
  disabled: PropTypes.bool
}

Checkbox.defaultProps = {
  disabled: false
}
export { Checkbox }
