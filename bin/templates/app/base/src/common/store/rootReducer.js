import { combineReducers } from 'redux'
import users from '../../core/Users/reducer'

const dummyReducer = (state = {}, action) => {
  return state
}
export default combineReducers({
  dummyReducer,
  users
})
