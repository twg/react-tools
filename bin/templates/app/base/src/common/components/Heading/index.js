import React from 'react'
import PropTypes from 'prop-types'
import css from './style.scss'

const Heading = props => <h1 className={css.heading}>{props.children}</h1>

Heading.propTypes = {
  children: PropTypes.string
}

export default Heading
