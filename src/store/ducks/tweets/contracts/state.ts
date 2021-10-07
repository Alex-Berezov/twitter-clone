export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
}

export interface Tweet {
    id: number,
    text: string,
    user: {
        accountName: string,
        accountShortName: string,
        avatarUrl: string,
    },
}

export interface TweetState {
    items: Tweet[],
    loadingState: LoadingState,
}