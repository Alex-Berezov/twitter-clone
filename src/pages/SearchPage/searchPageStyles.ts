import { makeStyles } from '@material-ui/core/styles'

export const searchPageStyles = makeStyles(() => ({
  searchPage: {},
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: 15,
    borderBottom: '1px solid rgb(230 233 234)',
    '& h2': {
      fontWeight: 700,
      marginLeft: 15,
    },
  },
  arrowBack: {
    color: '#000000',
  },
}))
