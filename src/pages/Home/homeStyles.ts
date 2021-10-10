import { makeStyles } from '@material-ui/core/styles'

export const homeStyles = makeStyles(() => ({
  homePage: {},
  title: {
    padding: '15px',
    borderBottom: '1px solid rgb(230 233 234)',
    '& h2': {
      fontWeight: 700,
    },
  },
  hr: {
    widht: '100%',
    height: 1,
    border: '1px solid rgb(230 233 234)',
  },
}))
