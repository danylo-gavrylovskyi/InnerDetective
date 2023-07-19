import React from 'react';

import styles from '../scss/Intro.module.scss';

export const Intro: React.FC = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.container}>
        <p className={styles.unleashYour}>Unleash Your</p>
        <span className={styles.innerDetective}>Inner Detective</span>
      </div>
    </div>
  );
};
