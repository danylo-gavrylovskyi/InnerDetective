import React from 'react';

import styles from '../scss/Benefit.module.scss';

interface IBenefitProps {
  mainText: string;
  secondaryText: string;
  svg: () => JSX.Element;
}

export const Benefit: React.FC<IBenefitProps> = ({ mainText, secondaryText, svg }) => {
  return (
    <section className={styles.container}>
      <div className={styles.info}>
        <div className={styles.icon}>{svg()}</div>
        <div style={{ margin: '0 0 0 15%' }}>
          <p className={styles.mainText}>{mainText}</p>
          <p className={styles.secondaryText}>{secondaryText}</p>
        </div>
      </div>
      <svg
        style={{ width: '3%', height: '23%', margin: '0 3% 0 0' }}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32">
        <path
          d="M 22.707 16.707 L 12.707 26.707 C 12.317 27.098 11.683 27.098 11.293 26.707 C 10.902 26.317 10.902 25.683 11.293 25.293 L 20.586 16 L 11.293 6.707 C 10.902 6.317 10.902 5.683 11.293 5.293 C 11.683 4.902 12.317 4.902 12.707 5.292 L 22.707 15.293 C 22.895 15.48 23.001 15.735 23.001 16 C 23.001 16.265 22.895 16.52 22.707 16.707 Z"
          fill="#000000"></path>
      </svg>
    </section>
  );
};
