import React from 'react';

import { Typography } from '@material-ui/core';

import { profileStyles } from './profileStyles';

export const Profile: React.FC = (): React.ReactElement => {
    const classes = profileStyles();

    return (
        <div className={classes.profilePage}>
            <div className={classes.title}>
                <Typography variant="h6" component="h2">
                    Profile
                </Typography>
            </div>
        </div>
    );
};
