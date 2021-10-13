import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  selectIsTweetsLoading,
  selectTweetsItems,
} from "../../store/tweets/selectors"
import { useHistory, useLocation } from "react-router"

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
  const selectedId = location.pathname.slice(7)
  const filteredTweets = tweets.filter((elem) => {
    if (elem._id === selectedId) {
      return elem
    }
  })

  const history = useHistory()
  const goBackButton = () => {
    history.goBack()
  }

  React.useEffect(() => {
    dispatch(fetchTweets())
  }, [dispatch])

  return (
    <div className={classes.selectedTweet}>
      <div className={classes.header}>
        <IconButton component="button" onClick={goBackButton}>
          <ArrowBackIcon className={classes.arrowBack} />
        </IconButton>
        <Typography variant="h6" component="h2">
          Tweet
        </Typography>
      </div>
      <SingleTweet tweets={filteredTweets} isLoading={isLoading} />
    </div>
  )
}

export default SelectedTweet
