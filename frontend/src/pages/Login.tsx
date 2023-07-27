import React from 'react';
import { TextField, Paper, Button, ThemeProvider, createTheme } from '@mui/material';
import { brown } from '@mui/material/colors';
import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AxiosError } from 'axios';

import axios from '../axios';

import styles from '../scss/EntryIntoAccount.module.scss';

export const Login: React.FC = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: brown[800],
      },
    },
  });

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<{ username: string; password: string }> = async (values) => {
    try {
      const { data } = await axios.post('/api/login', values);
      localStorage.setItem('token', data.token);
      navigate('/');
    } catch (error) {
      if (error instanceof AxiosError) {
        setError('username', { message: error.response?.data.message });
      }
    }
  };

  return (
    <div className={styles.container}>
      <Paper className={styles.paper}>
        <p className={styles.loginFont}>Login</p>
        <form style={{ width: '70%' }} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register('username', { required: 'Enter your username' })}
            helperText={errors.username?.message}
            error={Boolean(errors.username?.message)}
            style={{ width: '100%' }}
            label="Username"
            margin="normal"></TextField>
          <TextField
            {...register('password', { required: 'Enter your password' })}
            helperText={errors.password?.message}
            error={Boolean(errors.password?.message)}
            style={{ width: '100%' }}
            label="Password"
            type="password"
            margin="normal"></TextField>
          <ThemeProvider theme={theme}>
            <Button
              type="submit"
              style={{ margin: '5% 0 3% 0', width: '100%' }}
              size="large"
              variant="contained">
              Log In
            </Button>
          </ThemeProvider>
        </form>
        <p>
          Don't have an account? <Link to="/registration">Sign up</Link>
        </p>
      </Paper>
    </div>
  );
};
