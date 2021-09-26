import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const trendsStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      background: 'rgb(247, 249, 249)',
      borderRadius: 16,
      margin: '16px 0',
      padding: '5px 15px 30px 15px',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  }),
);