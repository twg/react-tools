import React from 'react'
import PropTypes from 'prop-types'

const User = ({ user }) => (
  <li>
    {user.name}: {user.company.bs}
  </li>
)

User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    company: PropTypes.shape({
      bs: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}
export default User
