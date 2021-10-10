import React from "react"

import Typography from "@material-ui/core/Typography"

import { trendingBlockStyles } from "./trendingBlockStyles"

interface TrendingBlockProps {
  name: string
  tweetsCount: number
}

const TrendingBlock: React.FC<TrendingBlockProps> = ({
  name,
  tweetsCount,
}: TrendingBlockProps): React.ReactElement => {
  const classes = trendingBlockStyles()

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="caption" display="block">
          Trending in your place
        </Typography>
      </div>
      <div className={classes.accountName}>
        <Typography variant="subtitle2" className={classes.accountName}>
          {name}
        </Typography>
      </div>
      <div className={classes.tweetsCount}>
        <Typography variant="caption" display="block">
          {tweetsCount} Tweets
        </Typography>
      </div>
    </div>
  )
}

export default TrendingBlock
