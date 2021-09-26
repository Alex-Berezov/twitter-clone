import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

export const trendingBlockStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        margin: '16px -15px 0 -15px',
        padding: '0 15px',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        '&:hover': {
            background: grey[200],
        }
    },
    header: {
        color: grey[500],
    },
    accountName: {},
    tweetsCount: {
        color: grey[500],
    },
  }),
);