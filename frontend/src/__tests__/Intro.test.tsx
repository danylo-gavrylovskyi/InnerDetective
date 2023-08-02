import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';

import { Intro } from '../modules/Intro';

describe('Intro module tests', () => {
  it('Sign out button exist', () => {
    localStorage['token'] = 'token';
    const { getByText } = render(
      <MemoryRouter>
        <Intro />
      </MemoryRouter>,
    );
    expect(getByText(/Sign out/i)).toBeInTheDocument();
  });

  it('Login button exist', () => {
    localStorage.removeItem('token');
    const { getByText } = render(
      <MemoryRouter>
        <Intro />
      </MemoryRouter>,
    );
    expect(getByText(/Log in/i)).toBeInTheDocument();
  });

  it('Sign out button works', () => {
    localStorage['token'] = 'token';
    const { getByText } = render(
      <MemoryRouter>
        <Intro />
      </MemoryRouter>,
    );
    fireEvent.click(getByText(/Sign out/i));
    expect(localStorage['token']).toBeFalsy();
  });
});
