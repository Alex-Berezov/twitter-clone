import { call, put, takeLatest } from 'redux-saga/effects'
import { TrendsAPI } from '../../services/api/trendsAPI'
import {
  setTrendsLoadingState,
  setTrends,
  TrendsActionsType,
} from './actionCreators'
import { LoadingState } from './contracts/state'

export function* fetchTrendsRequest(): any {
  try {
    const items = yield call(TrendsAPI.fetchTrends)
    yield put(setTrends(items))
  } catch (error) {
    yield put(setTrendsLoadingState(LoadingState.ERROR))
  }
}

export function* trendsSaga() {
  yield takeLatest(TrendsActionsType.FETCH_TRENDS, fetchTrendsRequest)
}
