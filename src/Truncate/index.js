import React, { Component } from 'react'
import PropTypes from 'prop-types'
import css from './style.css'

class Truncate extends Component {
  constructor(props) {
    super(props)
    this.toggleShow = this.toggleShow.bind(this)
    this.state = { show: false }
  }

  truncLength() {
    return this.props.length
  }

  contentLength() {
    return this.props.children.length
  }

  stringContent() {
    return this.props.children
  }

  // Attempt to find a 'nice' index to truncate the excerpt text
  truncPoint() {
    const { fudgeFactor } = this.props
    const truncLength = this.truncLength()
    let spaceIndex = this.props.children.indexOf(' ', truncLength)

    if (spaceIndex === -1 || spaceIndex > truncLength * fudgeFactor) {
      return truncLength
    } else {
      return spaceIndex
    }
  }

  excerpt() {
    return this.stringContent().slice(0, this.truncPoint())
  }

  rest() {
    return this.stringContent().slice(this.truncPoint())
  }

  toggleShow() {
    this.setState({ show: !this.state.show })
  }

  render() {
    if (this.contentLength() <= this.truncLength()) {
      return <div>{this.props.children}</div>
    }

    const ExpanderWrapper = [
      css.expanderWrapper,
      this.props.inline ? css.inline : ''
    ].join(' ')

    return (
      <div className={css.truncate}>
        {this.excerpt()}
        <div className={ExpanderWrapper}>
          <div className={css.expander} onClick={this.toggleShow}>
            <span className={css.dots}>...</span>
          </div>
        </div>
        <div>{this.state.show && this.rest()}</div>
      </div>
    )
  }
}

Truncate.propTypes = {
  children: PropTypes.string.isRequired,
  fudgeFactor: function(props, propName, componentName) {
    if (typeof props[propName] != 'number') {
      return new Error(`${propName} must be a number`)
    }
    if (props[propName] < 1) {
      return new Error(`${propName} must be greater than or equal to 1`)
    }
  },
  length: PropTypes.number
}

Truncate.defaultProps = {
  length: 100,
  fudgeFactor: 1.2
}

export { Truncate }
