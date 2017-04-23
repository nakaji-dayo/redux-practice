import 'babel-polyfill'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as reducers from './reducers';
import { routerMiddleware, syncHistoryWithStore, routerReducer } from 'react-router-redux'
import {browserHistory} from 'react-router'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    combineReducers({
      ...reducers,
      routing: routerReducer
    }), applyMiddleware(
      sagaMiddleware,
      logger(),
      routerMiddleware(browserHistory),
    )
  )
  sagaMiddleware.run(rootSaga)
  return store
}
