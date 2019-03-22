import { createReducer } from '../../common/utils'

export const INITIAL_STATE = {
  users: []
}

const reducers = {
  USERS_REQUEST: usersRequest,
  USERS_SUCCESS: usersSuccess,
  USERS_FAILURE: usersFailure
}

function usersRequest(state) {
  return {
    ...state,
    loading: true
  }
}

function usersSuccess(state, payload) {
  return {
    loading: false,
    users: payload
  }
}

function usersFailure(state, payload) {
  return {
    loading: false,
    users: [],
    error: payload
  }
}

export default createReducer(INITIAL_STATE, reducers)
