import React from 'react';

import { Avatar, Paper, TextareaAutosize } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import PublicIcon from '@material-ui/icons/Public';

import TweetSmallBtn from '../../../components/Ui/TweetSmallBtn/TweetSmallBtn';
import { createTweetFormStyles } from './createTweetFormStyles';

const CreateTweetForm = () => {
    const classes = createTweetFormStyles();

    return (
        <div className={classes.root}>
            <Paper component="form" className={classes.form}>
                <Avatar alt="User Name" src="/static/images/avatar/1.jpg" className={classes.avatar} />
                <div className={classes.addTweetPart}>
                    <TextareaAutosize aria-label="empty textarea" placeholder="What's happening?" />
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
                        <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                        <label htmlFor="icon-button-file">
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <ImageOutlinedIcon />
                            </IconButton>
                        </label>
                        <TweetSmallBtn />
                    </div>
                </div>
            </Paper>
        </div>
    );
};

export default CreateTweetForm;