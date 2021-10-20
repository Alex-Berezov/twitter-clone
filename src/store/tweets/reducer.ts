import produce, { Draft } from 'immer'
import { TweetsActions } from './actionCreators'
import { TweetsActionsType } from './contracts/actionTypes'
import { AddFormState, LoadingState, TweetState } from './contracts/state'

const initialTweetsState: TweetState = {
  items: [],
  AddFormState: AddFormState.NEVER,
  loadingState: LoadingState.NEVER,
}

export const tweetsReducer = produce(
  (draft: Draft<TweetState>, action: TweetsActions) => {
    switch (action.type) {
      case TweetsActionsType.SET_TWEETS:
        draft.items = action.payload
        draft.loadingState = LoadingState.LOADED
        break

      case TweetsActionsType.FETCH_TWEETS:
        draft.items = []
        draft.loadingState = LoadingState.LOADING
        break

      case TweetsActionsType.SET_LOADING_STATE:
        draft.loadingState = action.payload
        break

      case TweetsActionsType.FETCH_ADD_TWEET:
        draft.AddFormState = AddFormState.LOADING
        break

      case TweetsActionsType.ADD_TWEET:
        draft.items.push(action.payload)
        // TODO: Подумать, какой статус создать, если твит был добавлен
        draft.AddFormState = AddFormState.NEVER
        break

      default:
        break
    }
  },
  initialTweetsState,
)
