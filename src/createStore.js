import {createStore, combineReducers, applyMiddleware} from 'redux'
import {routerReducer, routerMiddleware} from 'react-router-redux'

export default function createAppStore({history, reducers}) {
  const middleware = routerMiddleware(history)
  const store = createStore(
    combineReducers({
      ...reducers,
      router: routerReducer,
    }),
    applyMiddleware(middleware),
  )
  return store
}
