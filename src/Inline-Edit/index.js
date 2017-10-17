import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { Button } from '../'
import css from './style.css'

class InlineEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
      pendingTitle: this.getOriginalText()
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.reset()
    }
  }

  reset() {
    this.setState({
      editing: false,
      pendingTitle: this.getOriginalText()
    })
  }

  getOriginalText = () => {
    const { originalText } = this.props
    return originalText
  }

  handleFocus = () => this.setState({ editing: true })

  handleCancel = () => this.reset()

  handleTitleChange = ({ target }) =>
    this.setState({
      pendingTitle: target.value
    })

  handleSave = () => {
    const { onChange } = this.props
    const { pendingTitle } = this.state

    this.setState({ editing: false })
    onChange(pendingTitle)
  }

  handleKeyboardShortcuts = ({ key }) => {
    if (key === 'Enter') {
      this.handleSave()
    }
    if (key === 'Escape') {
      this.handleCancel()
    }
  }

  render() {
    const { editing, pendingTitle } = this.state

    if (!editing) {
      return (
        <div className={css.editableContainer} onClick={this.handleFocus}>
          {pendingTitle}
        </div>
      )
    }

    return (
      <div>
        <div>
          <input
            ref={input => input && input.focus()}
            onKeyDown={this.handleKeyboardShortcuts}
            onChange={this.handleTitleChange}
            value={pendingTitle}
            className={css.inlineInput}
          />
        </div>
        <div>
          <Button design="primary" onClick={this.handleSave}>
            Save
          </Button>
          <Button design="secondary" onClick={this.handleCancel}>
            Cancel
          </Button>
        </div>
      </div>
    )
  }
}

InlineEdit.propTypes = {
  /**
  * The original text of the inline edit before the user starts editing the component
  */
  originalText: PropTypes.string.isRequired,
  /**
  * If the user hits save, the onChange prop is called with the current text in the component.
    onChange={title => doSomething(title)}
  */
  onChange: PropTypes.func.isRequired
}

export { InlineEdit }
