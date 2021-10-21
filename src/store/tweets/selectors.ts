import { createSelector } from 'reselect'
import { RootState } from '../store'
import { AddFormState, LoadingState, TweetState } from './contracts/state'

export const selectTweets = (state: RootState): TweetState => state.tweets

export const selectorLoadingState = (state: RootState): LoadingState =>
  selectTweets(state).loadingState

export const selectAddFormState = (state: RootState): AddFormState =>
  selectTweets(state).AddFormState

export const selectIsTweetsLoading = (state: RootState): boolean =>
  selectorLoadingState(state) === LoadingState.LOADING

export const selectIsTweetsLoaded = (state: RootState): boolean =>
  selectorLoadingState(state) === LoadingState.LOADING

export const selectTweetsItems = createSelector(
  selectTweets,
  (tweets) => tweets.items,
)
