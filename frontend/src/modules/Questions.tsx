import React from 'react';

import styles from '../scss/Questions.module.scss';
import { Question } from '../components/Question';

export const Questions: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Common Questions</h1>
      <div className={styles.questAndAnsw}>
        <Question
          question="Is my data secure?"
          answer="Absolutely! Your privacy is our top priority and all image uploads are securely encrypted."
        />
        <Question
          question="How accurate is it?"
          answer="Our image analysis algorithm has an outstanding accuracy rate of over 99%."
        />
        <Question
          question="Is it free to use?"
          answer="Yes! The Image Adult Checker is free to use for everyone."
        />
      </div>
    </div>
  );
};
