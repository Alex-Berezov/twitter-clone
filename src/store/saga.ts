import { all } from '@redux-saga/core/effects'
import { tweetsSaga } from './tweets/sagas'
import { trendsSaga } from './trends/sagas'

export default function* rootSaga() {
  yield all([tweetsSaga(), trendsSaga()])
}
