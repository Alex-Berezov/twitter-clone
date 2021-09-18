import React from 'react';

import { Typography } from '@material-ui/core';

import CreateTweetForm from './CreateTweetForm/CreateTweetForm';
import SingleTweet from './SingleTweet/SingleTweet';

import { homeStyles } from './homeStyles';

export const Home: React.FC = (): React.ReactElement => {
    const classes = homeStyles();

    return (
        <div className={classes.homePage}>
            <div className={classes.title}>
                <Typography variant="h6" component="h2">Home</Typography>
            </div>
            <CreateTweetForm />
            <SingleTweet />
        </div>
    );
};
