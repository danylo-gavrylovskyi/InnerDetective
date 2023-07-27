import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, createTheme, ThemeProvider } from '@mui/material';
import { brown } from '@mui/material/colors';

import styles from '../scss/Intro.module.scss';

export const Intro: React.FC = () => {
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: brown[800],
      },
    },
  });

  return (
    <div className={styles.intro}>
      <div className={styles.signOutBtn}>
        {localStorage['token'] ? (
          <Button onClick={signOut} variant="contained" color="error">
            Sign out
          </Button>
        ) : (
          <Link to="/login">
            <ThemeProvider theme={theme}>
              <Button variant="contained">Log in</Button>
            </ThemeProvider>
          </Link>
        )}
      </div>

      <div className={styles.container}>
        <p className={styles.unleashYour}>Unleash Your</p>
        <span className={styles.innerDetective}>Inner Detective</span>
      </div>
    </div>
  );
};
