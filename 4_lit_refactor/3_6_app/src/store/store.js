/* ---------- store.js ---------- */
import { combineReducers, applyMiddleware, createStore } from 'redux'
import { routerReducer, routerMiddleware } from 'redux-first-routing'
// import { otherReducers } from './reducers'

export const configureStore = (history, initialState = {}) => {
  // Add the reducer, which adds location state to the store
  const rootReducer = combineReducers({
    // ...otherReducers,
    router: routerReducer, // Convention is to use the "router" property
  })

  // Build the middleware with the history object
  const middleware = routerMiddleware(history)

  // Create the store
  return createStore(rootReducer, initialState, applyMiddleware(middleware))
}