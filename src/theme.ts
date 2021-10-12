import { createTheme } from '@material-ui/core/styles'

export const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      main: 'rgba(29,161,242)',
      dark: 'rgba(26,145,218)',
      contrastText: '#fff',
    },
    secondary: {
      main: 'rgb(247, 249, 249)',
    },
    error: {
      main: '#ff0000',
    },
    background: {
      default: '#fff',
    },
  },
  spacing: [0, 4, 8, 16, 32, 64],
})
