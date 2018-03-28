import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => (
  <ul>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/users">Fetching data</Link>
    </li>
  </ul>
)

export default Nav
