import React from 'react'
import css from './style.css'
import PropTypes from 'prop-types'

export const Sidebar = props => (
  <div className={css.sidebar}>{props.children}</div>
)

Sidebar.propTypes = {}

export default Sidebar
