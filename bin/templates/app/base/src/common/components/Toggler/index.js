import React from 'react'
import PropTypes from 'prop-types'
import css from './style.scss'

class Toggler extends React.Component {
  constructor(props) {
    super(props)
    this.state = { show: false }
    this.toggle = this.toggle.bind(this)
    this.toggleText = this.toggleText.bind(this)
  }

  toggle() {
    this.setState({ show: !this.state.show })
  }

  toggleText() {
    return { __html: this.state.show ? '&uarr;' : '&darr;' }
  }

  render() {
    return (
      <div>
        <div>
          {this.props.children} |{' '}
          <span
            className={css.toggler}
            onClick={this.toggle}
            dangerouslySetInnerHTML={this.toggleText()}
          />
        </div>
        <div>{this.state.show && this.props.more}</div>
      </div>
    )
  }
}

Toggler.propTypes = {
  more: PropTypes.node,
  children: PropTypes.string
}

export default Toggler
