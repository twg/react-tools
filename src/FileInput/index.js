import React from 'react'
import PropTypes from 'prop-types'
// import InputWrapper from '../input-wrapper'
import css from './style.css'

// Note: this is a "stylable" file input component that tries to work with
// reduxForm but it is not a controlled input like the others. HTMLInputElement
// does not accept a `value` attribute for inputs of `type="file"`, so although
// we allow redux form to maintain the state of the input, we rely on the DOM's
// state as well.

// In regards to styling, browsers don't make it easy to style a file input. The
// typical workaround is to render an invisble <input type="file"> element and
// hook it up to a label via the `for` attribute. The browser's behaviour is to
// trigger a click on the associated input when the label is clicked, thus
// causing the file selection dialog to open.

export class FileInput extends React.Component {
  constructor() {
    super()
    this.state = { files: [] }
  }

  onChange = e => {
    if (this.props.onChange) this.props.onChange()
    this.setState({ files: e.target.files[0].name })
  }

  render() {
    // const files = this.inputRef && this.inputRef.files
    const { label, showFilename, accept, multiple, disabled } = this.props

    const { value, files } = this.state

    const { onChange } = this

    return (
      <div>
        <label htmlFor={'id'}>{label}</label>
        {JSON.stringify(files)}

        <input
          ref={input => {
            this.inputRef = input
          }}
          id={'id'}
          type="file"
          disabled={disabled}
          style={{ display: 'none' }}
          accept={accept}
          multiple={multiple}
          onChange={e => onChange(e)}
        />

        {showFilename && files && files.length > 0 ? (
          <span>{files[0].name}</span>
        ) : null}
      </div>
    )
  }
}

FileInput.propTypes = {
  label: PropTypes.string.isRequired,
  showFilename: PropTypes.bool,
  accept: PropTypes.string,
  multiple: PropTypes.bool
}

FileInput.defaultProps = {
  showFilename: false,
  multiple: false
}

export default FileInput
