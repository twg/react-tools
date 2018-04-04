import React from 'react'
import css from './style.css'
import PropTypes from 'prop-types'

export const H1 = props => <h1 className={css.h1}>{props.children} </h1>
export const H2 = props => <h2 className={css.h2}>{props.children} </h2>
export const H3 = props => <h3 className={css.h3}>{props.children} </h3>
export const H4 = props => <h4 className={css.h4}>{props.children} </h4>
export const H5 = props => <h5 className={css.h5}>{props.children} </h5>
export const H6 = props => <h6 className={css.h6}>{props.children} </h6>

export const P = props => <p className={css.p}>{props.children} </p>

H1.propTypes = {}
H2.propTypes = {}
H3.propTypes = {}
H4.propTypes = {}
H5.propTypes = {}
H6.propTypes = {}
P.propTypes = {}
