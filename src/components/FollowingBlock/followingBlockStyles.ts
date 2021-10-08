import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

export const followingBlockStyles = makeStyles(() =>
  createStyles({
    root: {
        margin: '16px -15px 0 -15px',
        padding: '5px 15px',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        '&:hover': {
            background: grey[200],
        }
    },
    followingBlockContent: {},
    accountInfo: {},
    accountName: {},
    accountShortName: {
      color: grey[500],
    },
  }),
);