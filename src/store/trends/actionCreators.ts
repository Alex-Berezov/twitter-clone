import { Action } from 'redux'
import { LoadingState, TrendsState } from './contracts/state'

export enum TrendsActionsType {
  SET_TRENDS = 'trends/SET_TRENDS',
  FETCH_TRENDS = 'trends/FETCH_TRENDS',
  SET_LOADING_STATE = 'trends/SET_LOADING_STATE',
}

export interface SetTrendsActionInterface extends Action<TrendsActionsType> {
  type: TrendsActionsType.SET_TRENDS
  payload: TrendsState['items']
}

export interface FetchTrendsActionInterface extends Action<TrendsActionsType> {
  type: TrendsActionsType.FETCH_TRENDS
}

export interface SetTrendsLoadingStateActionInterface
  extends Action<TrendsActionsType> {
  type: TrendsActionsType.SET_LOADING_STATE
  payload: LoadingState
}

export const setTrends = (
  payload: TrendsState['items'],
): SetTrendsActionInterface => ({
  type: TrendsActionsType.SET_TRENDS,
  payload,
})

export const setTrendsLoadingState = (
  payload: LoadingState,
): SetTrendsLoadingStateActionInterface => ({
  type: TrendsActionsType.SET_LOADING_STATE,
  payload,
})

export const fetchTrends = (): FetchTrendsActionInterface => ({
  type: TrendsActionsType.FETCH_TRENDS,
})

export type TrendsActions =
  | SetTrendsActionInterface
  | FetchTrendsActionInterface
  | SetTrendsLoadingStateActionInterface
