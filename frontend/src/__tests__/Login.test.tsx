import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';
import { createMemoryHistory } from 'history';

import { Login } from '../pages/Login';

jest.mock('axios');
const mockAxios = axios as jest.Mocked<typeof axios>;

describe('Login page tests', () => {
  const history = createMemoryHistory();
  beforeEach(() => localStorage.clear());

  it('Submits the login form successfully and navigates to home page', async () => {
    const mockData = {
      token: 'mock_token',
    };
    mockAxios.post.mockResolvedValueOnce({ data: mockData });
    render(
      //@ts-ignore
      <MemoryRouter history={history}>
        <Login />
      </MemoryRouter>,
    );

    fireEvent.change(screen.getByLabelText('Username'), { target: { value: 'test' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'testpassword' } });
    fireEvent.click(screen.getByText(/Log in/i));
    await waitFor(() => expect(history.location.pathname).toBe('/'));
    await waitFor(() => expect(localStorage.getItem('token')).toBe(mockData.token));
  });

  it('Check for error output when login incorrectly', async () => {
    const mockError = {
      response: {
        data: {
          message: 'Invalid credentials',
        },
      },
    };
    mockAxios.post.mockRejectedValueOnce(mockError);
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
    );
    fireEvent.change(screen.getByLabelText('Username'), { target: { value: 'test' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'testpassword' } });
    fireEvent.click(screen.getByText(/Log in/i));
    await waitFor(() => expect(screen.getByText(/Invalid credentials/i)).toBeInTheDocument());
    expect(localStorage.getItem('token')).toBeNull();
  });
});
