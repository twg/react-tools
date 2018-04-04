import React from 'react'
import css from './style.css'
import PropTypes from 'prop-types'

export const Radio = ({ id, onChange, name, checked, label }) => (
  <div className={css.wrapper}>
    <label className={css.label} htmlFor={id}>
      <input
        type="radio"
        className={css.radio}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <span className={css.span} />
    </label>

    <p style={{ marginTop: '4px' }}>{label}</p>
  </div>
)

Radio.propTypes = {
  /**
   * This is the name of the radio, you need this for the label and input to be linked
   */
  id: PropTypes.string.isRequired,
  /**
   * This is the label of the button
   */
  label: PropTypes.string.isRequired,
  /**
   * Event to fire when radio changes, passes the checkbox value as
   * an argument onChange={value => handleNewValue(value)}
   */
  onChange: PropTypes.func,
  /**
   * Whether the value is checked or not. Available values: true, false
   */
  checked: PropTypes.bool
}

export default Radio
