import React, { Component } from 'react'
import css from './style.css'
import PropTypes from 'prop-types'

export class TopNav extends Component {
  state = { menuOpen: false }

  toggleMenu = e => {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  render() {
    const itemHeight = 58
    const { menuOpen } = this.state
    const { activeItem, links = [], right, center, left } = this.props
    const openModifier = menuOpen ? ' open' : ''
    const openHeight = itemHeight * links.length
    const ulStyle = {}
    const navbarStyle = {}
    const rightClasses = [css.right]
    if (menuOpen) rightClasses.push(css.open)

    return (
      <div className={css.topnav} style={navbarStyle}>
        <div className={css.left}>
          <button
            className={css.mobileButton}
            onClick={e => this.toggleMenu(e)}
          >
            ☰
          </button>

          {left}
        </div>
        <div className={css.center}>{center}</div>
        <div className={rightClasses.join(' ')}>
          <ul style={ulStyle}>
            {links.map((child, i) => <li key={i}>{child}</li>)}
            {menuOpen && <li>{right}</li>}
          </ul>
          {!menuOpen && <div style={{ display: 'inherit' }}>{right}</div>}
        </div>
      </div>
    )
  }
}

TopNav.PropTypes = {
  activeItem: PropTypes.number.isRequired,
  links: PropTypes.arrayOf(PropTypes.element),
  right: PropTypes.element
}

export default TopNav
