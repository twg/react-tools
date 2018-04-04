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

Radio.propTypes = {}

export default Radio
