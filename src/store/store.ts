import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './saga'
import { rootReducer } from './rootReducer'
import { TweetState } from './tweets/contracts/state'
import { TrendsState } from './trends/contracts/state'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const sagaMiddleware = createSagaMiddleware()

export interface RootState {
  tweets: TweetState
  trends: TrendsState
}

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(rootSaga)
