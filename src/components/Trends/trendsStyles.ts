import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'

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
    preloader: {
      textAlign: 'center',
      marginTop: 100,
    },
    trendingBlock: {
      margin: '16px -15px 0 -15px',
      padding: '0 15px',
      display: 'flex',
      flexDirection: 'column',
      cursor: 'pointer',
      textDecoration: 'none',
      '&:hover': {
        background: grey[200],
      },
    },
    trendingBlockHeader: {
      color: grey[500],
    },
    accountName: {
      color: '#000000',
      fontStyle: 'bold',
    },
    tweetsCount: {
      color: grey[500],
    },
  }),
)
