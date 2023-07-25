import React from 'react';
import { TextField, Paper, Button, ThemeProvider, createTheme } from '@mui/material';
import { brown } from '@mui/material/colors';
import { Link } from 'react-router-dom';

import styles from '../scss/EntryIntoAccount.module.scss';

export const Login: React.FC = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: brown[800],
      },
    },
  });

  return (
    <div className={styles.container}>
      <Paper className={styles.paper}>
        <p className={styles.loginFont}>Login</p>
        <TextField style={{ width: '70%' }} label="Username" margin="normal"></TextField>
        <TextField
          style={{ width: '70%' }}
          label="Password"
          type="password"
          margin="normal"></TextField>
        <ThemeProvider theme={theme}>
          <Button style={{ margin: '5% 0 3% 0', width: '70%' }} size="large" variant="contained">
            Log In
          </Button>
        </ThemeProvider>
        <p>
          Don't have an account? <Link to="/registration">Sign up</Link>
        </p>
      </Paper>
    </div>
  );
};
