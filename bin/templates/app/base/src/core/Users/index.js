import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchUsers } from './actions'
import User from './components/User'

import { Button } from '../../common/components'
import { getETailers } from './selectors'

export class Users extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showAll: true }
    this.showETailers = this.showETailers.bind(this)
  }

  componentDidMount() {
    this.props.fetchUsers()
  }

  showETailers() {
    this.setState({
      showAll: !this.state.showAll
    })
  }

  usersToShow() {
    return this.state.showAll ? this.props.users : this.props.eTailers
  }

  render() {
    if (this.props.error) {
      return <div>We have an error... {JSON.stringify(this.props.error)}</div>
    }

    if (this.props.loading) {
      return <p>Loading...</p>
    }

    return (
      <div>
        <p>
          This page is all about fetching some random data, storing it in redux,
          and using reselect to filter that data.
        </p>
        <Button onClick={this.showETailers}>Show etailers</Button>
        <ul>
          {this.usersToShow().map(user => <User key={user.id} user={user} />)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state.users,
    eTailers: getETailers(state)
  }
}

Users.propTypes = {
  users: PropTypes.array
}

export default connect(mapStateToProps, { fetchUsers })(Users)
