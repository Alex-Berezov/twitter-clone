import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

import Typography from "@material-ui/core/Typography"
import { CircularProgress } from "@material-ui/core"
import SettingsIcon from "@material-ui/icons/SettingsOutlined"

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
            <Link
              to={`/home/search?q=${trend.name}`}
              className={classes.trendingBlock}
              key={trend._id}
            >
              <div className={classes.trendingBlockHeader}>
                <Typography variant="caption" display="block">
                  Trending in your place
                </Typography>
              </div>
              <div className={classes.accountName}>
                <Typography variant="subtitle2" className={classes.accountName}>
                  {trend.name}
                </Typography>
              </div>
              <div className={classes.tweetsCount}>
                <Typography variant="caption" display="block">
                  {trend.tweetsCount} Tweets
                </Typography>
              </div>
            </Link>
          )
        })
      )}
    </div>
  )
}

export default Trends
