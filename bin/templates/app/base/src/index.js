import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './core/App'
import store from './common/store'

// @ts-ignore
function render(Component) {
  return ReactDOM.render(
    <AppContainer>
      <Component store={store} />
    </AppContainer>,
    // @ts-ignore
    document.getElementById('root')
  )
}

render(App)
// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept('./core/App', () => {
    render(App)
  })
}
