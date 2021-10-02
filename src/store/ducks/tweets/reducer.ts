import produce, { Draft } from 'immer'
import { TweetsActions, TweetsActionsType } from './actionCreators/actionCreators';
import { LoadingState, TweetState } from './contracts/state';

const initialTweetsState: TweetState = {
    items: [],
    loadingState: LoadingState.NEVER,
};

export const tweetsReducer = produce((draft: Draft<TweetState>, action: TweetsActions) => {
    const { type, payload } = action;

    if (type === TweetsActionsType.SET_TWEETS) {
        draft.items = payload;
    }
}, initialTweetsState);