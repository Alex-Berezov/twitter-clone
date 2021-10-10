import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  selectIsTweetsLoading,
  selectTweetsItems,
} from "../../store/tweets/selectors"
import { fetchTweets } from "../../store/tweets/actionCreators"
import { CircularProgress, Grid, IconButton } from "@material-ui/core"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
import Typography from "@material-ui/core/Typography"
import ReplyIcon from "@material-ui/icons/ChatBubbleOutlineOutlined"
import RetweetIcon from "@material-ui/icons/Repeat"
import LikeIcon from "@material-ui/icons/FavoriteBorderOutlined"
import ShareIcon from "@material-ui/icons/ShareOutlined"

import BasicAvatar from "../Ui/BasicAvatar/BasicAvatar"
import { singleTweetStyles } from "./singleTweetStyles"

const SingleTweet: React.FC = (): React.ReactElement => {
  const classes = singleTweetStyles()

  const dispatch = useDispatch()
  const tweets = useSelector(selectTweetsItems)
  const isLoading = useSelector(selectIsTweetsLoading)

  React.useEffect(() => {
    dispatch(fetchTweets())
  }, [dispatch])

  return (
    <div className={classes.root}>
      {isLoading ? (
        <div className={classes.preloader}>
          <CircularProgress />
        </div>
      ) : (
        tweets.map((tweet) => {
          return (
            <Grid container spacing={2} key={tweet._id}>
              <Grid item xs={1}>
                <BasicAvatar
                  accountName={tweet.user.accountName}
                  avatarUrl={tweet.user.avatarUrl}
                />
              </Grid>
              <Grid item xs={11} className={classes.singleTweetContent}>
                <div className={classes.singleTweetHeader}>
                  <div className={classes.accountInfo}>
                    <Typography
                      variant="subtitle2"
                      className={classes.accountName}
                    >
                      {tweet.user.accountName}
                    </Typography>
                    <Typography
                      variant="body2"
                      className={classes.accountShortName}
                    >
                      {tweet.user.accountShortName}
                    </Typography>
                    <FiberManualRecordIcon className={classes.separationDot} />
                    <Typography
                      variant="body2"
                      className={classes.publicationTime}
                    >
                      6m
                    </Typography>
                  </div>
                </div>
                <Typography variant="body2" className={classes.singleTweetText}>
                  {tweet.text}
                </Typography>
                <div className={classes.singleTweetButtons}>
                  <IconButton
                    aria-label="reply icon"
                    className={classes.replyIcon}
                  >
                    <ReplyIcon fontSize="small" />
                    <Typography variant="body2">1</Typography>
                  </IconButton>
                  <IconButton
                    aria-label="retweet icon"
                    className={classes.retweetIcon}
                  >
                    <RetweetIcon fontSize="small" />
                    <Typography variant="body2">12</Typography>
                  </IconButton>
                  <IconButton
                    aria-label="like icon"
                    className={classes.likeIcon}
                  >
                    <LikeIcon fontSize="small" />
                    <Typography variant="body2">123</Typography>
                  </IconButton>
                  <IconButton
                    aria-label="share icon"
                    className={classes.shareIcon}
                  >
                    <ShareIcon fontSize="small" />
                    <Typography variant="body2">21</Typography>
                  </IconButton>
                </div>
              </Grid>
            </Grid>
          )
        })
      )}
    </div>
  )
}

export default SingleTweet
