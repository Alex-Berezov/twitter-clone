import { takeEvery } from 'redux-saga/effects'
import { TweetsActionsType } from './actionCreators/actionCreators';

export function* fetchTweetsRequest() {
  console.log('test');
}

export function* tweetsSaga() {
  yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
}