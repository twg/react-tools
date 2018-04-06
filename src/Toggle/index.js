import React, { Component } from 'react'
import css from './style.css'
import PropTypes from 'prop-types'

export class Toggle extends Component {
  state = { toggled: this.props.initialVal ? this.props.initialVal : false }

  toggle = () => {
    const { onToggle } = this.props
    this.setState(
      state => ({ toggled: !state.toggled }),
      () => {
        if (onToggle) onToggle(this.state.toggled)
      }
    )
  }

  render() {
    const { toggle } = this
    const { toggled } = this.state
    const { leftLabel, rightLabel } = this.props
    const toggleClasses = [css.toggle]
    const toggleBallClasses = [css.toggleBall]
    if (toggled) {
      toggleClasses.push(css.toggled)
      toggleBallClasses.push(css.toggled)
    }
    return (
      <div className={css.toggleSwitchWrapper}>
        {leftLabel && <label className={css.beforeLabel}>{leftLabel}</label>}

        <div className={toggleClasses.join(' ')} onClick={toggle}>
          <div className={toggleBallClasses.join(' ')} />
        </div>
        {rightLabel && <label className={css.afterLabel}>{rightLabel}</label>}
      </div>
    )
  }
}

Toggle.propTypes = {
  initialVal: PropTypes.bool,
  leftLabel: PropTypes.string,
  rightLabel: PropTypes.string,
  onToggle: PropTypes.func.isRequired,
  /*
  * Initial value of the toggle
  */
  initialVal: PropTypes.bool
}

export default Toggle
