import React, { Component } from 'react'
import css from './style.css'
import PropTypes from 'prop-types'

export const TextInput = props => {
  const inputClasses = [css.input]
  if (props.error) inputClasses.push(css.error)

  return (
    <div className={css.textinput}>
      <label className={css.inputlabel} htmlFor={props.id}>
        <h5>{props.label}</h5>
      </label>
      <div style={{ ...props.style, position: 'relative' }}>
        <input className={inputClasses.join(' ')} type="text" {...props} />
        {props.error && <div className={css.exclamation}>!</div>}
        {props.error && (
          <div className={css.error}>
            <p>{props.error}</p>
          </div>
        )}
      </div>
    </div>
  )
}

TextInput.propTypes = {
  /**
   * The id provided to the underlying input
   */
  id: PropTypes.string,
  /**
   * The error message displayed
   */
  error: PropTypes.string,
  /**
   * Placeholder text passed to the underlying input
   */
  placeholder: PropTypes.string,
  /**
   * Specifier for the input type
   */
  type: PropTypes.string,
  /**
   * Label to be displayed and associated with the input
   */
  label: PropTypes.string
}

export default TextInput
