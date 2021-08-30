import React from 'react';

import { Typography } from '@material-ui/core';

import { messagesStyles } from './messagesStyles';

export const Messages: React.FC = (): React.ReactElement => {
    const classes = messagesStyles();

    return (
        <div className={classes.messagesPage}>
            <div className={classes.title}>
                <Typography variant="h6" component="h2">
                    Messages
                </Typography>
            </div>
        </div>
    );
};
