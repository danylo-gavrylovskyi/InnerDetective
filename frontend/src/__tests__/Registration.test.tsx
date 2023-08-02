import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import { MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { Registration } from '../pages/Registration';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Registration page tests', () => {
  const history = createMemoryHistory();
  beforeEach(() => localStorage.clear());

  it('Submits the registration form successfully and navigates to home page', async () => {
    const mockData = {
      token: 'mock_token',
    };
    mockedAxios.post.mockResolvedValueOnce({ data: mockData });
    render(
      //@ts-ignore
      <MemoryRouter history={history}>
        <Registration />
      </MemoryRouter>,
    );
    fireEvent.change(screen.getByLabelText('Username'), { target: { value: 'test' } });
    fireEvent.change(screen.getByLabelText('E-mail'), { target: { value: 'test@test.com' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'testpassword' } });
    fireEvent.click(screen.getByText('Sign up'));
    await waitFor(() => expect(history.location.pathname).toBe('/'));
    await waitFor(() => expect(localStorage.getItem('token')).toBe(mockData.token));
  });

  it('Check if errors display correctly', async () => {
    const mockError = {
      response: {
        data: [
          {
            location: 'location',
            msg: 'Incorrect e-mail format',
            path: 'email',
            type: 'type',
            value: 'value',
          },
          {
            location: 'location2',
            msg: 'Password must contain at least 6 symbols',
            path: 'password',
            type: 'type',
            value: 'value',
          },
        ],
      },
    };

    mockedAxios.post.mockRejectedValueOnce(mockError);
    render(
      <MemoryRouter>
        <Registration />
      </MemoryRouter>,
    );
    fireEvent.change(screen.getByLabelText('Username'), { target: { value: 'test' } });
    fireEvent.change(screen.getByLabelText('E-mail'), { target: { value: 'test' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'test' } });
    fireEvent.click(screen.getByText(/Sign up/i));
    await waitFor(() => expect(screen.getByText(/Incorrect e-mail format/i)).toBeInTheDocument());
    await waitFor(() =>
      expect(screen.getByText(/Password must contain at least 6 symbols/i)).toBeInTheDocument(),
    );
  });
});
