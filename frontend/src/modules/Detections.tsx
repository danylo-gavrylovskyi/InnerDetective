import React from 'react';

import styles from '../scss/Detections.module.scss';

export interface IDetectionsProps {
  adult: string;
  spoof: string;
  medical: string;
  violence: string;
  racy: string;
}

export const Detections: React.FC<IDetectionsProps> = ({
  adult,
  spoof,
  medical,
  violence,
  racy,
}) => {
  const colorChecker = (result: string) => {
    switch (result) {
      case 'UNKNOWN':
        return 'grey';
      case 'VERY_UNLIKELY':
        return 'rgb(162, 202, 162)';
      case 'UNLIKELY':
        return 'green';
      case 'POSSIBLE':
        return 'yellow';
      case 'LIKELY':
        return 'orange';
      case 'VERY_LIKELY':
        return 'red';
      default:
        break;
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.mainText}>Probability that this image contains:</p>
      <p>
        Adult content is{' '}
        <span style={{ color: `${colorChecker(adult)}` }}>
          {adult.replace('_', ' ').toLocaleLowerCase()}
        </span>
      </p>
      <p>
        Spoof is{' '}
        <span style={{ color: `${colorChecker(adult)}` }}>
          {spoof.replace('_', ' ').toLocaleLowerCase()}
        </span>
      </p>
      <p>
        Medical is{' '}
        <span style={{ color: `${colorChecker(medical)}` }}>
          {medical.replace('_', ' ').toLocaleLowerCase()}
        </span>
      </p>
      <p>
        Violence is{' '}
        <span style={{ color: `${colorChecker(violence)}` }}>
          {violence.replace('_', ' ').toLocaleLowerCase()}
        </span>
      </p>
      <p>
        Racy content is{' '}
        <span style={{ color: `${colorChecker(racy)}` }}>
          {racy.replace('_', ' ').toLocaleLowerCase()}
        </span>
      </p>
    </div>
  );
};
