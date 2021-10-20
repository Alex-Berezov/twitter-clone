import {
  AddTweeActionInterface,
  FetchAddTweeActionInterface,
  FetchTweetsActionInterface,
  SetAddFormStateActionInterface,
  SetTweetsActionInterface,
  SetTweetsLoadingStateActionInterface,
  TweetsActionsType,
} from './contracts/actionTypes'
import {
  AddFormState,
  LoadingState,
  Tweet,
  TweetState,
} from './contracts/state'

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

export const setAddFormState = (
  payload: AddFormState,
): SetAddFormStateActionInterface => ({
  type: TweetsActionsType.SET_ADD_FORM_STATE,
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
  | SetAddFormStateActionInterface
