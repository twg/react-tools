import React, { Component } from 'react'
import PropTypes from 'prop-types'
import css from './style.css'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something has gone wrong.</h1>
    }
    return this.props.children
  }
}

ErrorBoundary.propTypes = {}

export { ErrorBoundary }
