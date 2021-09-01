import React from 'react';

import { Avatar, Paper, TextareaAutosize } from '@material-ui/core';

import { createTweetFormStyles } from './createTweetFormStyles';

const CreateTweetForm = () => {
    const classes = createTweetFormStyles();

    return (
        <div className={classes.root}>
            <Paper component="form" className={classes.form}>
                <Avatar alt="User Name" src="/static/images/avatar/1.jpg" className={classes.avatar} />
                <div className={classes.addTweetPart}>
                    <TextareaAutosize aria-label="empty textarea" placeholder="What's happening?" />
                </div>
            </Paper>
        </div>
    );
};

export default CreateTweetForm;