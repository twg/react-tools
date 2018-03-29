/* eslint-env jest */

import { getUsersById, getETailers } from './selectors'

const users = [
  { id: 1, name: 'josh', company: { bs: 'e-cig solutions' } },
  { id: 2, name: 'zuck', company: { bs: 'twg' } }
]

const state = {
  users: {
    users
  }
}

describe('users selectors', () => {
  describe('getUsersById', () => {
    it('returns an object of users keyed by id', () => {
      const usersById = getUsersById(state)
      expect(usersById['1']).toEqual({
        id: 1,
        name: 'josh',
        company: { bs: 'e-cig solutions' }
      })
      expect(usersById['2']).toEqual({
        id: 2,
        name: 'zuck',
        company: { bs: 'twg' }
      })
    })
  })

  describe('getEtailers', () => {
    it('only returns users who work for e-tailers', () => {
      const eUsers = getETailers(state)
      expect(eUsers).toEqual([
        { id: 1, name: 'josh', company: { bs: 'e-cig solutions' } }
      ])
    })
  })
})
