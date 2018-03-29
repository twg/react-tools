/* eslint-env jest */

import { fetchUsers } from './actions'
import mockResponse from 'test/mockResponse'

describe('user actions', () => {
  describe('fetchUsers', () => {
    it('should dispatch a USERS_REQUEST action', () => {
      const dispatch = jest.fn()
      const response = mockResponse(200, null, '{}')
      global.fetch = jest
        .fn()
        .mockImplementation(() => Promise.resolve(response))
      fetchUsers()(dispatch)
      expect(global.fetch).toBeCalled()
      expect(dispatch).toHaveBeenCalledWith({ type: 'USERS_REQUEST' })
    })

    it('should dispatch a USERS_SUCCESS action when the request succeeds', () => {
      const dispatch = jest.fn()
      const responseBody = '{"ok": "good"}'
      const response = mockResponse(200, null, responseBody)
      global.fetch = jest
        .fn()
        .mockImplementation(() => Promise.resolve(response))
      fetchUsers()(dispatch).then(() => {
        expect(global.fetch).toBeCalled()
        expect(dispatch).lastCalledWith({
          type: 'USERS_SUCCESS',
          payload: { ok: 'good' }
        })
        expect(dispatch.mock.calls.length).toBe(2)
      })
    })

    it('should dispatch a USERS_FAILURE action when the request fails', () => {
      const dispatch = jest.fn()
      const responseBody = '{"no": "good"}'
      const response = mockResponse(400, null, responseBody)
      global.fetch = jest
        .fn()
        .mockImplementation(() => Promise.reject(response))
      fetchUsers()(dispatch).then(() => {
        expect(global.fetch).toBeCalled()
        expect(
          dispatch.mock.calls[dispatch.mock.calls.length - 1]
        ).toHaveProperty('0.type', 'USERS_FAILURE')
        expect(dispatch.mock.calls.length).toBe(2)
      })
    })
  })
})
