import React from 'react';

import { Typography } from '@material-ui/core';

import { listsStyles } from './listsStyles';

export const Lists: React.FC = (): React.ReactElement => {
    const classes = listsStyles();

    return (
        <div className={classes.listsPage}>
            <div className={classes.title}>
                <Typography variant="h6" component="h2">
                    Lists
                </Typography>
            </div>
        </div>
    );
};
