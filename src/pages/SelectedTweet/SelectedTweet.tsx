import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  selectIsTweetsLoading,
  selectTweetsItems,
} from "../../store/tweets/selectors"
import { useLocation } from "react-router"

import { IconButton, Typography } from "@material-ui/core"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"

import SingleTweet from "../../components/SingleTweet/SingleTweet"
import { fetchTweets } from "../../store/tweets/actionCreators"

import { selectedTweetStyles } from "./selectedTweetStyles"

const SelectedTweet: React.FC = (): React.ReactElement => {
  const classes = selectedTweetStyles()

  const dispatch = useDispatch()
  const tweets = useSelector(selectTweetsItems)
  const isLoading = useSelector(selectIsTweetsLoading)

  let location = useLocation()
  console.log("location: ", location.pathname)

  React.useEffect(() => {
    dispatch(fetchTweets())
  }, [dispatch])

  return (
    <div className={classes.selectedTweet}>
      <div className={classes.header}>
        <IconButton color="secondary" component="button">
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6" component="h2">
          Tweet
        </Typography>
      </div>
      <SingleTweet tweets={tweets} isLoading={isLoading} />
    </div>
  )
}

export default SelectedTweet
