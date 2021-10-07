import { createSelector } from "reselect";
import { RootState } from "../../store";
import { TweetState } from "./contracts/state";

export const selectTweets = (state: RootState): TweetState => state.tweets;

export const selectorLoadingState  = (state: RootState) => selectTweets(state).loadingState;

export const selectTweetsItems = createSelector(selectTweets, tweets => tweets.items);