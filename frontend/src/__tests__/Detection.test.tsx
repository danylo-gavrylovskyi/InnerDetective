import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Detections } from '../modules/Detections';

describe('Detection module tests', () => {
  const detectionProps = {
    adult: 'LIKELY',
    spoof: 'UNLIKELY',
    medical: 'VERY_LIKELY',
    violence: 'UNKNOWN',
    racy: 'POSSIBLE',
  };

  it('renders the correct detection information', () => {
    const { getByText } = render(<Detections {...detectionProps} />);
    expect(getByText('Adult content is')).toBeInTheDocument();
    expect(getByText('Spoof is')).toBeInTheDocument();
    expect(getByText('Medical is')).toBeInTheDocument();
    expect(getByText('Violence is')).toBeInTheDocument();
    expect(getByText('Racy content is')).toBeInTheDocument();
  });

  it('renders correct colors for detections', () => {
    const { getByText } = render(<Detections {...detectionProps} />);
    expect(getByText('likely')).toHaveStyle('color: orange');
    expect(getByText('unlikely')).toHaveStyle('color: green');
    expect(getByText('very likely')).toHaveStyle('color: red');
    expect(getByText('unknown')).toHaveStyle('color: grey');
    expect(getByText('possible')).toHaveStyle('color: yellow');
  });
});
