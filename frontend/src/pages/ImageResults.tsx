import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Header } from '../modules/Header';
import { Detections } from '../modules/Detections';

import styles from '../scss/ImageResults.module.scss';

interface IDetections {
  adult: string;
  spoof: string;
  medical: string;
  violence: string;
  racy: string;
}

export const ImageResults: React.FC = () => {
  const imageUrl: string = useLocation().state.imageUrl;
  const imageData: IDetections = useLocation().state.imageData;

  return (
    <div className={styles.mainDiv}>
      <Header />
      <div className={styles.container}>
        <img src={imageUrl} alt="analyze"></img>
        <div>
          <Detections {...imageData} />
          <Link to="/">
            <button>Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
