// styles/theme.js
'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
  });

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976D2',
    },
    secondary: {
      main: '#F50057',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;