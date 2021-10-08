import { call, put, takeLatest } from 'redux-saga/effects'
import { TweetsAPI } from '../../../services/api/tweetsAPI';
import { setTweetLoadingState, setTweets, TweetsActionsType } from './actionCreators/actionCreators';
import { LoadingState } from './contracts/state';

export function* fetchTweetsRequest(): any {
  try {
    const items = yield call(TweetsAPI.fetchTweets);
    yield put(setTweets(items));
  } catch (error) {
    yield put(setTweetLoadingState(LoadingState.ERROR));
  }  
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
}