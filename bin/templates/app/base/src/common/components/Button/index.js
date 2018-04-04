import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.scss'

const Button = props => (
  <button className={styles.button} onClick={props.onClick}>
    {props.children}
  </button>
)

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
