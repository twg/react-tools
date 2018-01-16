import React from 'react'
import PropTypes from 'prop-types'
// import InputWrapper from '../input-wrapper'
import css from './style.css'

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
    if (this.props.onChange) this.props.onChange(e)
    this.setState({ files: e.target.files })
  }

  render() {
    const { label, showFilename, accept, multiple, disabled } = this.props

    const { value, files } = this.state

    const { onChange } = this

    return (
      <div>
        <label htmlFor={'id'}>{label}</label>

        <input
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
