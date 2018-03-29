/* global fetch */

const fetchUsers = () => {
  return dispatch => {
    dispatch({
      type: 'USERS_REQUEST'
    })
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => {
        dispatch({
          type: 'USERS_SUCCESS',
          payload: res
        })
      })
      .catch(err => {
        dispatch({
          type: 'USERS_FAILURE',
          payload: err
        })
      })
  }
}

export { fetchUsers }
