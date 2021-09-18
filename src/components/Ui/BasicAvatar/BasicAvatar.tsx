import React from 'react';
import { Avatar } from '@material-ui/core';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
        width: '2.5em',
        height: '2.5em',
    },
  }),
);

const BasicAvatar = () => {
    const classes = useStyles();
    return (
        <Avatar alt="User Name" src="/static/images/avatar/1.jpg" className={classes.avatar} />
    );
};

export default BasicAvatar;