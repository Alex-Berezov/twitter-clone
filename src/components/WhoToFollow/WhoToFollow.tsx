import React from 'react';

import { Typography } from '@material-ui/core';

import { whoToFollowStyles } from './whoToFollowStyles';
import FollowingBlock from '../FollowingBlock/FollowingBlock';

const WhoToFollow: React.FC = (): React.ReactElement => {
    const classes = whoToFollowStyles();

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <Typography variant="h6">
                    Who to follow
                </Typography>
            </div>
            <FollowingBlock />
            <FollowingBlock />
            <FollowingBlock />
        </div>
    );
};

export default WhoToFollow;