import { call, put, takeLatest } from 'redux-saga/effects'
import { TweetsAPI } from '../../services/api/tweetsAPI'
import {
  AddTweeActionInterface,
  addTweet,
  FetchAddTweeActionInterface,
  setTweetLoadingState,
  setTweets,
  TweetsActionsType,
} from './actionCreators'
import { LoadingState, Tweet } from './contracts/state'

export function* fetchTweetsRequest(): any {
  try {
    const items = yield call(TweetsAPI.fetchTweets)
    yield put(setTweets(items))
  } catch (error) {
    yield put(setTweetLoadingState(LoadingState.ERROR))
  }
}

export function* fetchAddTweetRequest({
  payload,
}: FetchAddTweeActionInterface) {
  try {
    const data: Tweet = {
      _id: Math.random().toString(36).substr(2),
      text: payload,
      user: {
        accountName: 'Test user',
        accountShortName: 'test',
        avatarUrl: 'https://source.unsplash.com/random/100x100?5',
      },
    }
    const item: Tweet = yield call(TweetsAPI.addTweet, data)
    yield put(addTweet(item))
  } catch (error) {
    yield put(setTweetLoadingState(LoadingState.ERROR))
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
  yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest)
}
