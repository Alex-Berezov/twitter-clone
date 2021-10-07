import axios from "axios";
import { TweetState } from "../../store/ducks/tweets/contracts/state";

export const TweetsAPI = {
    fetchTweets(): Promise<TweetState['items']> {
        return axios.get('https://trycode.pw/c/G9EJM.json').then(({ data }) => data);
    },
}