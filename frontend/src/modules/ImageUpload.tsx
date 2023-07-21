import React, { ChangeEvent } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import styles from '../scss/ImageUpload.module.scss';

export const ImageUpload: React.FC = () => {
  interface IDetections {
    adult: string;
    spoof: string;
    medical: string;
    violence: string;
    racy: string;
  }

  const [imageData, setImageData] = React.useState<IDetections>();
  const [imageUrl, setImageUrl] = React.useState<string>('');

  const uploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      try {
        const formData = new FormData();
        formData.append('image', event.target.files[0]);
        const { data } = await axios.post('http://localhost:3001/api/analyze', formData);
        setImageData(data);
        setImageUrl(URL.createObjectURL(event.target.files[0]));
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
        {imageData && (
          <Link to="/results" state={{ imageData, imageUrl }}>
            <button className={styles.submit}>Submit</button>
          </Link>
        )}
      </div>
    </main>
  );
};
