import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import BasicAvatar from '../Ui/BasicAvatar/BasicAvatar';
import FollowButtonsBlack from '../Ui/FollowButtons/FollowButtonsBlack';

import avatarUrl from '../../assets/images/lohp_1302x955.png';
import { followingBlockStyles } from './followingBlockStyles';

const FollowingBlock: React.FC = (): React.ReactElement => {
    const classes = followingBlockStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <BasicAvatar accountName={'Account Name'} avatarUrl={avatarUrl} />
                </Grid>
                <Grid item xs={6} className={classes.followingBlockContent}>
                    <div className={classes.accountInfo}>
                        <Typography variant="subtitle2" className={classes.accountName}>
                            Account Name
                        </Typography>
                        <Typography variant="body2" className={classes.accountShortName}>
                            ShortName
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <FollowButtonsBlack />
                </Grid>
            </Grid>
        </div>
    );
};

export default FollowingBlock;