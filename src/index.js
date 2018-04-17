import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'

import './index.css'
import * as reducers from './reducers'

import {Web3Provider as Web3ProviderUnsafe} from 'providers/Web3ProviderUnsafe'
import App from 'containers/App'

const theme = createMuiTheme()
const store = createStore(combineReducers(reducers), applyMiddleware(thunkMiddleware))

ReactDOM.render(
  <Provider store={store}>
    <Web3ProviderUnsafe>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </Web3ProviderUnsafe>
  </Provider>,
  document.getElementById('root'),
)
