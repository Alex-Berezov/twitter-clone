import React from 'react';

import { Typography } from '@material-ui/core';

import { notificationsStyles } from './notificationsStyles';

export const Notifications: React.FC = (): React.ReactElement => {
    const classes = notificationsStyles();

    return (
        <div className={classes.notificationsPage}>
            <div className={classes.title}>
                <Typography variant="h6" component="h2">
                    Notifications
                </Typography>
            </div>
        </div>
    );
};
