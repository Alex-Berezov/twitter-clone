import React from "react"
import { Typography } from "@material-ui/core"

import CreateTweetForm from "../../components/CreateTweetForm/CreateTweetForm"
import SingleTweet from "../../components/SingleTweet/SingleTweet"
import { homeStyles } from "./homeStyles"

interface HomeProps {
  classes: ReturnType<typeof homeStyles>
}

export const Home: React.FC<HomeProps> = (): React.ReactElement => {
  const classes = homeStyles()

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
      <SingleTweet />
    </div>
  )
}
