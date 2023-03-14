import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0e6fb6',
    },
    secondary: {
      main: '#efc822',
      contrastText: '#000000',
    },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    subtitle1: {
      fontSize: '1.3rem',
    },
  },
});
