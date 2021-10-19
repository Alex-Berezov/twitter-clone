import { Action } from 'redux'
import { LoadingState, Tweet, TweetState } from './contracts/state'

export enum TweetsActionsType {
  SET_TWEETS = 'tweets/SET_TWEETS',
  FETCH_TWEETS = 'tweets/FETCH_TWEETS',
  SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
  FETCH_ADD_TWEET = 'tweets/FETCH_ADD_TWEET',
  ADD_TWEET = 'tweets/ADD_TWEET',
}

export interface SetTweetsActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_TWEETS
  payload: TweetState['items']
}

export interface FetchAddTweeActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.FETCH_ADD_TWEET
  payload: string
}

export interface AddTweeActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.ADD_TWEET
  payload: Tweet
}

export interface FetchTweetsActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.FETCH_TWEETS
}

export interface SetTweetsLoadingStateActionInterface
  extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_LOADING_STATE
  payload: LoadingState
}

export const setTweets = (
  payload: TweetState['items'],
): SetTweetsActionInterface => ({
  type: TweetsActionsType.SET_TWEETS,
  payload,
})

export const fetchAddTweet = (
  payload: string,
): FetchAddTweeActionInterface => ({
  type: TweetsActionsType.FETCH_ADD_TWEET,
  payload,
})

export const addTweet = (payload: Tweet): AddTweeActionInterface => ({
  type: TweetsActionsType.ADD_TWEET,
  payload,
})

export const setTweetLoadingState = (
  payload: LoadingState,
): SetTweetsLoadingStateActionInterface => ({
  type: TweetsActionsType.SET_LOADING_STATE,
  payload,
})

export const fetchTweets = (): FetchTweetsActionInterface => ({
  type: TweetsActionsType.FETCH_TWEETS,
})

export type TweetsActions =
  | SetTweetsActionInterface
  | FetchTweetsActionInterface
  | SetTweetsLoadingStateActionInterface
  | FetchAddTweeActionInterface
  | AddTweeActionInterface
