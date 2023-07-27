import React from 'react';
import { TextField, Paper, Button, ThemeProvider, createTheme } from '@mui/material';
import { brown } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AxiosError } from 'axios';

import axios from '../axios';

import styles from '../scss/EntryIntoAccount.module.scss';

type ErrorPath = 'username' | 'email' | 'password';
interface IValidationError {
  location: string;
  msg: string;
  path: ErrorPath;
  type: string;
  value: string;
}

export const Registration: React.FC = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: brown[800],
      },
    },
  });

  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<{ username: string; email: string; password: string }> = async (
    values,
  ) => {
    try {
      const { data } = await axios.post('/api/registration', values);
    } catch (error) {
      if (error instanceof AxiosError) {
        error.response?.data.map((err: IValidationError) => {
          setError(`${err.path}`, { message: err.msg });
        });
      }
    }
  };

  return (
    <div className={styles.container}>
      <Paper className={styles.paper}>
        <p className={styles.loginFont}>Registration</p>
        <form style={{ width: '70%' }} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register('username', { required: 'Enter your username' })}
            helperText={errors.username?.message}
            error={Boolean(errors.username?.message)}
            style={{ width: '100%' }}
            label="Username"
            margin="normal"></TextField>
          <TextField
            {...register('username', { required: 'Enter your e-mail' })}
            helperText={errors.email?.message}
            error={Boolean(errors.email?.message)}
            style={{ width: '100%' }}
            label="E-mail"
            margin="normal"></TextField>
          <TextField
            {...register('username', { required: 'Enter your password' })}
            helperText={errors.password?.message}
            error={Boolean(errors.password?.message)}
            style={{ width: '100%' }}
            label="Password"
            type="password"
            margin="normal"></TextField>
          <ThemeProvider theme={theme}>
            <Button
              type="submit"
              style={{
                margin: '5% 0 3% 0',
                width: '100%',
              }}
              size="large"
              variant="contained">
              Sign up
            </Button>
          </ThemeProvider>
        </form>
        <p>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </Paper>
    </div>
  );
};
