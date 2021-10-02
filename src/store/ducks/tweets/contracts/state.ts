export enum LoadingState {
    LOADED = 'LOADED',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
}

export interface Tweet {
    user: {
        accountName: string,
        accountShortName: string,
        avatarUrl: string,
    },
    text: string,
}

export interface TweetState {
    items: Tweet[],
    loadingState: LoadingState,
}