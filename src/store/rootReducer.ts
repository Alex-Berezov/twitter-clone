import { combineReducers } from 'redux'
import { trendsReducer } from './trends/reducer'
import { tweetsReducer } from './tweets/reducer'

export const rootReducer = combineReducers({
  tweets: tweetsReducer,
  trends: trendsReducer,
})
