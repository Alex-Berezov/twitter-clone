import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  selectIsTweetsLoading,
  selectTweetsItems,
} from "../../store/tweets/selectors"
import { fetchTweets } from "../../store/tweets/actionCreators"

import { Typography } from "@material-ui/core"

import CreateTweetForm from "../../components/CreateTweetForm/CreateTweetForm"
import SingleTweet from "../../components/SingleTweet/SingleTweet"
import { homeStyles } from "./homeStyles"

interface HomeProps {
  classes: ReturnType<typeof homeStyles>
}

export const Home: React.FC<HomeProps> = (): React.ReactElement => {
  const classes = homeStyles()

  const dispatch = useDispatch()
  const tweets = useSelector(selectTweetsItems)
  const isLoading = useSelector(selectIsTweetsLoading)

  React.useEffect(() => {
    dispatch(fetchTweets())
  }, [dispatch])

  return (
    <div className={classes.homePage}>
      <div className={classes.title}>
        <Typography variant="h6" component="h2">
          Home
        </Typography>
      </div>
      <CreateTweetForm
        user={{
          accountName: "Account Name",
          avatarUrl: "../../assets/images/lohp_1302x955.png",
        }}
      />
      <hr className={classes.hr} />
      <SingleTweet tweets={tweets} isLoading={isLoading} />
    </div>
  )
}
