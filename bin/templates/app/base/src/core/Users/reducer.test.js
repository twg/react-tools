/* eslint-env jest */

import reducer, { INITIAL_STATE } from './reducer'

describe('users reducer', () => {
  describe('USERS_REQUEST', () => {
    it('sets the loading flag to true', () => {
      const newState = reducer(INITIAL_STATE, { type: 'USERS_REQUEST' })
      expect(newState.loading).toEqual(true)
    })
  })

  describe('USERS_SUCCESS', () => {
    it('sets the loading flag to false', () => {
      const newState = reducer(INITIAL_STATE, {
        type: 'USERS_SUCCESS',
        payload: []
      })
      expect(newState.loading).toEqual(false)
    })

    it('sets the users payload', () => {
      const payload = [{ id: 1, name: 'josh' }]
      const newState = reducer(INITIAL_STATE, {
        type: 'USERS_SUCCESS',
        payload
      })
      expect(newState.users).toEqual(payload)
    })
  })
})
