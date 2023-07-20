import React from 'react';

import styles from '../scss/Description.module.scss';

export const Description: React.FC = () => {
  return (
    <section className={styles.desciption}>
      <p className={styles.descrLeft}>A Safe Way To Check</p>
      <p className={styles.descrRight}>
        Upload your images and our sophisticated algorithm will check for adult content. Keep it
        clean and have fun while making sure your online space is safe.
      </p>
    </section>
  );
};
