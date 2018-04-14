import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {ConnectedRouter} from 'react-router-redux'

import Home from 'containers/Home'

export default function createRouter({history}) {
  return (
    <ConnectedRouter history={history}>
      <BrowserRouter>
        <Switch>
          <Route component={Home} />
        </Switch>
      </BrowserRouter>
    </ConnectedRouter>
  )
}
