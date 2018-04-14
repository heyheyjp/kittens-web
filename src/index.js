import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import createBrowserHistory from 'history/createBrowserHistory'

import './index.css'
import registerServiceWorker from './registerServiceWorker'
import createRouter from './createRouter'
import createStore from './createStore'
import reducers from './reducers'
import App from 'containers/App'

const history = createBrowserHistory()
const store = createStore({history, reducers})
const router = createRouter({history})

ReactDOM.render(
  <Provider store={store}>
    <App>{router}</App>
  </Provider>,
  document.getElementById('root'),
)

registerServiceWorker()
