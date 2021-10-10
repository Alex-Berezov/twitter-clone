import axios from 'axios'
import { TweetState } from '../../store/tweets/contracts/state'

export const TweetsAPI = {
  fetchTweets(): Promise<TweetState['items']> {
    return axios.get('/tweets').then(({ data }) => data)
  },
}
