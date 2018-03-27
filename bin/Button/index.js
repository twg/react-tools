import React, { Component } from 'react'
import css from './style.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class ButtonComponent extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {}

  render() {
    return <div className={css.button} />
  }
}

Button.propTypes = {}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({})
}

const mapStateToProps = state => {
  return {}
}

export const Button = connect(mapStateToProps, mapDispatchToProps)(
  ButtonComponent
)

export default Button
