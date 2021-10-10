import React from "react"
import { useDispatch, useSelector } from "react-redux"

import Typography from "@material-ui/core/Typography"
import { CircularProgress } from "@material-ui/core"
import SettingsIcon from "@material-ui/icons/SettingsOutlined"

import TrendingBlock from "../TrendingBlock/TrendingBlock"
import { fetchTrends } from "../../store/trends/actionCreators"
import {
  selectTrendsItems,
  selectIsTrendsLoading,
} from "../../store/trends/selectors"
import { trendsStyles } from "./trendsStyles"

const Trends: React.FC = (): React.ReactElement => {
  const classes = trendsStyles()
  const dispatch = useDispatch()
  const trends = useSelector(selectTrendsItems)
  const isLoading = useSelector(selectIsTrendsLoading)

  React.useEffect(() => {
    dispatch(fetchTrends())
  }, [dispatch])

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h6">Trends for you</Typography>
        <SettingsIcon />
      </div>
      {isLoading ? (
        <div className={classes.preloader}>
          <CircularProgress />
        </div>
      ) : (
        trends?.map((trend) => {
          return (
            <TrendingBlock
              name={trend.name}
              tweetsCount={trend.tweetsCount}
              key={trend._id}
            />
          )
        })
      )}
    </div>
  )
}

export default Trends
