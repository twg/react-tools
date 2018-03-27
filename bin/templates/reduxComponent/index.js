import React, { Component } from 'react'
import css from './style.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class __UPPER_CAMEL_NAME__Component extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {}

  render() {
    return <div className={css.__LOWER_CAMEL_NAME__} />
  }
}

__UPPER_CAMEL_NAME__.propTypes = {}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({})
}

const mapStateToProps = state => {
  return {}
}

export const __UPPER_CAMEL_NAME__ = connect(
  mapStateToProps,
  mapDispatchToProps
)(__UPPER_CAMEL_NAME__Component)

export default __UPPER_CAMEL_NAME__
