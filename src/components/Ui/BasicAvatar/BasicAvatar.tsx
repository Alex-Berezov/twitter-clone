import React from 'react';
import { Avatar } from '@material-ui/core';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

interface BasicAvatarProps {
  avatarUrl: string,
  accountName: string,
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
        width: '2.5em',
        height: '2.5em',
    },
  }),
);

const BasicAvatar: React.FC<BasicAvatarProps> = (
  { avatarUrl, accountName }: BasicAvatarProps
  ): React.ReactElement => {
    const classes = useStyles();
    return (
        <Avatar alt={accountName} src={avatarUrl} className={classes.avatar} />
    );
};

export default BasicAvatar;