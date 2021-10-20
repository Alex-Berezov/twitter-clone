import React from "react"
import { useDispatch } from "react-redux"

import { Paper, TextareaAutosize } from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import CircularProgress from "@material-ui/core/CircularProgress"
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined"
import PublicIcon from "@material-ui/icons/Public"
import SmileIcon from "@material-ui/icons/SentimentSatisfiedOutlined"

import TweetSmallBtn from "../Ui/TweetSmallBtn/TweetSmallBtn"
import BasicAvatar from "../Ui/BasicAvatar/BasicAvatar"
import { fetchAddTweet } from "../../store/tweets/actionCreators"
import { createTweetFormStyles } from "./createTweetFormStyles"

interface CreateTweetFormProps {
  user: {
    accountName: string
    avatarUrl: string
  }
}

const MAX_LENGTH = 280
const MAX_ROWS = 10

const CreateTweetForm: React.FC<CreateTweetFormProps> = ({
  user,
}: CreateTweetFormProps): React.ReactElement => {
  const classes = createTweetFormStyles()

  const dispatch = useDispatch()
  const [text, setText] = React.useState<string>("")
  const textLimitPercent = Math.round((text.length / 280) * 100)
  const textCount = MAX_LENGTH - text.length

  const handleChangeTextarea = (
    e: React.FormEvent<HTMLTextAreaElement>
  ): void => {
    if (e.currentTarget) {
      setText(e.currentTarget.value)
    }
  }

  const handleClickAddTweet = (): void => {
    dispatch(fetchAddTweet(text))
    setText("")
  }

  return (
    <div className={classes.root}>
      <Paper component="form" className={classes.form}>
        <BasicAvatar
          accountName={user.accountName}
          avatarUrl={user.avatarUrl}
        />
        <div className={classes.addTweetPart}>
          <TextareaAutosize
            aria-label="empty textarea"
            placeholder="What's happening?"
            onChange={handleChangeTextarea}
            value={text}
            maxRows={MAX_ROWS}
          />
          <IconButton
            className={classes.accessToComments}
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <PublicIcon />
            <Typography variant="subtitle2" gutterBottom>
              Everyone can reply
            </Typography>
          </IconButton>
          <span className={classes.formHr} />
          <div className={classes.buttonBlock}>
            <div className="iconsBlock">
              <input
                accept="image/*"
                className={classes.input}
                id="icon-button-file"
                type="file"
              />
              <label htmlFor="icon-button-file">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <ImageOutlinedIcon />
                </IconButton>
              </label>
              <IconButton
                className={classes.smileIcon}
                color="primary"
                component="span"
              >
                <SmileIcon />
              </IconButton>
            </div>
            <div className={classes.buttonBlockRightPart}>
              {text && (
                <>
                  {text.length >= MAX_LENGTH ? (
                    <span className={classes.textRed}>{textCount}</span>
                  ) : (
                    <span>{textCount}</span>
                  )}
                  <CircularProgress
                    variant="determinate"
                    value={text.length >= MAX_LENGTH ? 100 : textLimitPercent}
                    style={
                      text.length >= MAX_LENGTH ? { color: "red" } : undefined
                    }
                  />
                </>
              )}
              <TweetSmallBtn
                disabled={!text || text.length >= MAX_LENGTH}
                addTweet={handleClickAddTweet}
              />
            </div>
          </div>
        </div>
      </Paper>
    </div>
  )
}

export default CreateTweetForm
