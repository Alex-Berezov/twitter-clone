export enum LoadingState {
  LOADED = 'LOADED',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

export interface Trend {
  _id: string
  name: string
  tweetsCount: number
}

export interface TrendsState {
  items: Trend[]
  loadingState: LoadingState
}
