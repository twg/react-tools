import React from 'react'
import css from './style.css'

export const Divider = () => <div className={css.divider} />

export const VerticalDivider = () => (
  <div className={css['horizontal-divider']} />
)

Divider.propTypes = {}

VerticalDivider.propTypes = {}

export default Divider
