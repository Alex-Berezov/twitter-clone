import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
      borderRadius: '99px',
    },
  }),
);

export default function TweetSmallBtn() {
  const classes = useStyles();

  return (
    <div>
        <Button variant="contained" size="large" color="primary" className={classes.margin}>
            Tweet
        </Button>
    </div>
  );
}