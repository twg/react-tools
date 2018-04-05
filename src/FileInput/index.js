import React from 'react'
import PropTypes from 'prop-types'
import css from './style.css'

export class FileInput extends React.Component {
  blankState = { files: [], imagePreviewUrl: '' }
  state = { ...this.blankState }

  _onChange = e => {
    let reader = new FileReader()
    let file = e.target.files[0]

    reader.onloadend = () => {
      this.setState({
        imagePreviewUrl: reader.result
      })
    }
    reader.readAsDataURL(file)

    if (this.props.onChange) this.props.onChange(e)
    this.setState({ files: e.target.files })
  }

  _onRemove = () => {
    this.setState({ ...this.blankState })

    if (this.props.onRemove) this.props.onRemove()
  }

  render() {
    const { label, hideFileName, accept, multiple, disabled } = this.props

    const { value, files, imagePreviewUrl } = this.state

    const { _onChange, _onRemove } = this

    return (
      <div>
        {files.length === 0 && (
          <div>
            <label className={css.label} htmlFor={'id'}>
              {label}
            </label>
            <input
              id={'id'}
              type="file"
              disabled={disabled}
              style={{ display: 'none' }}
              accept={accept}
              multiple={multiple}
              onChange={_onChange}
            />
          </div>
        )}

        {files && files.length > 0 ? (
          <div className={css.imagepreviewwrapper}>
            <img className={css.imagepreview} src={imagePreviewUrl} />
            {!hideFileName && <span>{files[0].name}</span>}
            <button onClick={_onRemove}>Remove</button>
          </div>
        ) : null}
      </div>
    )
  }
}

FileInput.propTypes = {
  label: PropTypes.string.isRequired,
  hideFileName: PropTypes.bool,
  accept: PropTypes.string,
  multiple: PropTypes.bool
}

FileInput.defaultProps = {
  hideFileName: false,
  multiple: false
}

export default FileInput
