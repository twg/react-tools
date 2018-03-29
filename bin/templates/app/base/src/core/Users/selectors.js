import { createSelector } from 'reselect'

const getUsers = state => state.users.users

const getUsersById = createSelector(getUsers, users => {
  return users.reduce((usersById, user) => {
    usersById[user.id] = user
    return usersById
  }, {})
})

const getETailers = createSelector(getUsers, users => {
  return users && users.filter(user => user.company.bs.indexOf('e-') !== -1)
})

export { getUsersById, getETailers }
