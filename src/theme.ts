import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme ({
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
      main: 'rgba(29,161,242,1.00)',
    },
    secondary: {
      main: '#000',
    },
  },
  spacing: [0, 4, 8, 16, 32, 64],
})