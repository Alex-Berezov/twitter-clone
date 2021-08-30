import React from 'react';

import { Typography } from '@material-ui/core';

import { exploreStyles } from './exploreStyles';

export const Explore: React.FC = (): React.ReactElement => {
    const classes = exploreStyles();

    return (
        <div className={classes.explorePage}>
            <div className={classes.title}>
                <Typography variant="h6" component="h2">
                    Explore
                </Typography>
            </div>
        </div>
    );
};
