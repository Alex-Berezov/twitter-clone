import React from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    followBatton: {
        background: '#000000',
        color: '#ffffff',
        textTransform: 'none',
        boxShadow: 'none',
        borderRadius: 99,
        '&:hover': {
            background: '#000000',
            color: '#ffffff',
            boxShadow: 'none',
        },
    },
  }),
);

const FollowButtonsBlack = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button className={classes.followBatton} variant="contained">
                Follow
            </Button>
        </div>
    );
};

export default FollowButtonsBlack;