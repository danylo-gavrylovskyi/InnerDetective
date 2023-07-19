import React, { ChangeEvent } from 'react';

import styles from '../scss/ImageUpload.module.scss';

export const ImageUpload: React.FC = () => {
  const uploadImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      //post request to /api/analyze
    }
  };

  return (
    <main className={styles.container}>
      <p className={styles.callToAction}>Ready to try? Let's do this!</p>
      <div>
        <label className={styles.uploadImage} htmlFor="fileUpload">
          Upload Image
        </label>
        <input
          id="fileUpload"
          onChange={(event) => uploadImage(event)}
          style={{ visibility: 'hidden' }}
          type="file"></input>
        <button className={styles.howItWorks}>How it Works</button>
      </div>
    </main>
  );
};
