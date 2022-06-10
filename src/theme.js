import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette:{
    primary:{
      main: "#ff5047",
    },
    secondary:{
      main: "#1b0b33",
    },
    error:{
      main: "#ff5047",
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});