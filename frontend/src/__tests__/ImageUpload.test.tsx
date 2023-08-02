import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';

import { ImageUpload } from '../modules/ImageUpload';

jest.mock('axios');
const mockAxios = axios as jest.Mocked<typeof axios>;

describe('Image upload tests', () => {
  window.URL.createObjectURL = jest.fn(() => 'fake-object-url');

  it('Upload image button exists', () => {
    const { getByText } = render(<ImageUpload />);
    expect(getByText('Upload Image')).toBeInTheDocument();
  });

  it('uploads image and navigates to the results page', async () => {
    const mockImageData = {
      adult: 'UNLIKELY',
      spoof: 'POSSIBLE',
      medical: 'LIKELY',
      violence: 'VERY_LIKELY',
      racy: 'UNLIKELY',
    };
    const mockImage = new File(['fake-image-data'], 'fake-image.png', { type: 'image/png' });
    mockAxios.post.mockResolvedValueOnce({ data: mockImageData });
    render(
      <MemoryRouter>
        <ImageUpload />
      </MemoryRouter>,
    );
    const fileInput = screen.getByLabelText('Upload Image');
    fireEvent.change(fileInput, { target: { files: [mockImage] } });
    await waitFor(() => expect(screen.getByText('Submit')).toBeInTheDocument());
    fireEvent.click(screen.getByText('Submit'));
  });
});
