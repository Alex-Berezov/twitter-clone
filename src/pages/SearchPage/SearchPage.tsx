import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  selectIsTweetsLoading,
  selectTweetsItems,
} from "../../store/tweets/selectors"
import { useHistory, useLocation } from "react-router"

import { IconButton } from "@material-ui/core"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"

import SingleTweet from "../../components/SingleTweet/SingleTweet"
import { SearchTwitter } from "../../components/SearchTwitter/SearchTwitter"
import { fetchTweets } from "../../store/tweets/actionCreators"

import { searchPageStyles } from "./searchPageStyles"

const SearchPage: React.FC = (): React.ReactElement => {
  const classes = searchPageStyles()

  const dispatch = useDispatch()
  const tweets = useSelector(selectTweetsItems)
  const isLoading = useSelector(selectIsTweetsLoading)

  let location = useLocation()
  const selectedId = location.pathname.slice(7)
  const filteredTweets = tweets.filter((elem) => {
    return elem._id === selectedId ? elem : null
  })

  const history = useHistory()
  const goBackButton = () => {
    history.goBack()
  }

  React.useEffect(() => {
    dispatch(fetchTweets())
  }, [dispatch])

  return (
    <div className={classes.searchPage}>
      <div className={classes.header}>
        <IconButton component="button" onClick={goBackButton}>
          <ArrowBackIcon className={classes.arrowBack} />
        </IconButton>
        <SearchTwitter value={location.hash} />
      </div>
      <SingleTweet tweets={filteredTweets} isLoading={isLoading} />
    </div>
  )
}

export default SearchPage
