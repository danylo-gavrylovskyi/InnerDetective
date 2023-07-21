import React, { ChangeEvent } from 'react';
import axios from 'axios';

import styles from '../scss/ImageUpload.module.scss';

export const ImageUpload: React.FC = () => {
  const uploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      try {
        const formData = new FormData();
        formData.append('image', event.target.files[0]);
        const { data } = await axios.post('http://localhost:3001/api/analyze', formData);
      } catch (error) {
        console.log(error);
      }
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
