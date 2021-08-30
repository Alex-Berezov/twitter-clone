import React from 'react';

import { Typography } from '@material-ui/core';

import { homeStyles } from './homeStyles';

export const Home: React.FC = (): React.ReactElement => {
    const classes = homeStyles();

    return (
        <div className={classes.homePage}>
            <div className={classes.title}>
                <Typography variant="h6" component="h2">
                    Home
                </Typography>
            </div>
        </div>
    );
};
