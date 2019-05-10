import React from 'react'
import { Provider } from 'react-redux'
import Routes from './routes'
import '../common/styles'

const App = props => (
  <Provider store={props.store}>
    <Routes />
  </Provider>
)

export default App
