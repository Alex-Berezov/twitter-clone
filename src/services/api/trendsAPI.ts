import axios from 'axios'
import { TrendsState } from '../../store/trends/contracts/state'

export const TrendsAPI = {
  fetchTrends(): Promise<TrendsState['items']> {
    return axios.get('/trends').then(({ data }) => data)
  },
}
