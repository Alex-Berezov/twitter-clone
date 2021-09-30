import React from 'react';

import { Paper, TextareaAutosize } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import PublicIcon from '@material-ui/icons/Public';
import SmileIcon from '@material-ui/icons/SentimentSatisfiedOutlined';

import TweetSmallBtn from '../Ui/TweetSmallBtn/TweetSmallBtn';
import BasicAvatar from '../Ui/BasicAvatar/BasicAvatar';
import { createTweetFormStyles } from './createTweetFormStyles';

interface CreateTweetFormProps {
    user: {
        accountName: string,
        avatarUrl: string,
    },
};

const CreateTweetForm: React.FC<CreateTweetFormProps> = (
    { user }: CreateTweetFormProps
    ): React.ReactElement => {
    const classes = createTweetFormStyles();

    const [text, setText] = React.useState<string>('');
    const textLimitPercent = Math.round((text.length / 280) * 100);
    const maxLength = 280 - (text.length + 1);

    const handleChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget) {
            setText(e.currentTarget.value);
        }
    }

    return (
        <div className={classes.root}>
            <Paper component="form" className={classes.form}>
                <BasicAvatar accountName={user.accountName} avatarUrl={user.avatarUrl} />
                <div className={classes.addTweetPart}>
                    <TextareaAutosize
                        aria-label="empty textarea"
                        placeholder="What's happening?"
                        onChange={handleChangeTextarea}
                        value={text}
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
                            <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                            <label htmlFor="icon-button-file">
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                    <ImageOutlinedIcon />
                                </IconButton>
                            </label>
                            <IconButton className={classes.smileIcon} color="primary" component="span">
                                <SmileIcon />
                            </IconButton>
                        </div>
                        <div className={classes.buttonBlockRightPart}>
                            {text && (
                                    <>
                                        {
                                            textLimitPercent >= 100
                                                ? <span className={classes.textRed}>{maxLength}</span>
                                                : <span>{maxLength}</span>
                                        }
                                        <CircularProgress
                                            variant="determinate"
                                            value={textLimitPercent > 100 ? 100 : textLimitPercent}
                                            style={textLimitPercent >= 100 ? {color: 'red'} : undefined}
                                        />
                                    </>
                                )
                            }
                            <TweetSmallBtn />
                        </div>
                    </div>
                </div>
            </Paper>
        </div>
    );
};

export default CreateTweetForm;