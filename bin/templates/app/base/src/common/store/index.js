import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './rootReducer'
import thunk from 'redux-thunk'

const dev = process.env.NODE_ENV === 'development'

function devTools() {
  if (dev && window.devToolsExtension) {
    return window.devToolsExtension()
  }
  return f => f
}

const store = createStore(
  rootReducer,
  undefined, // initialState
  compose(applyMiddleware(thunk), devTools())
)

if (module.hot) {
  module.hot.accept(rootReducer, () => {
    store.replaceReducer(rootReducer)
  })
}

export default store
