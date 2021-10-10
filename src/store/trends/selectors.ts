import { createSelector } from 'reselect'
import { RootState } from '../store'
import { LoadingState, TrendsState } from './contracts/state'

export const selectTrends = (state: RootState): TrendsState => state.trends

export const selectorLoadingState = (state: RootState): LoadingState =>
  selectTrends(state)?.loadingState

export const selectIsTrendsLoading = (state: RootState): boolean =>
  selectorLoadingState(state) === LoadingState.LOADING

export const selectIsTrendsLoaded = (state: RootState): boolean =>
  selectorLoadingState(state) === LoadingState.LOADING

export const selectTrendsItems = createSelector(
  selectTrends,
  (trends) => trends?.items,
)
