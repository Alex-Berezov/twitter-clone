import React from 'react';

import { Typography } from '@material-ui/core';

import { bookmarksStyles } from './bookmarksStyles';

export const Bookmarks: React.FC = (): React.ReactElement => {
    const classes = bookmarksStyles();

    return (
        <div className={classes.bookmarksPage}>
            <div className={classes.title}>
                <Typography variant="h6" component="h2">
                    Bookmarks
                </Typography>
            </div>
        </div>
    );
};
