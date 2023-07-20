import React from 'react';

import styles from '../scss/Question.module.scss';

interface IQuestionProps {
  question: string;
  answer: string;
}

export const Question: React.FC<IQuestionProps> = ({ question, answer }) => {
  return (
    <section>
      <p className={styles.question}>{question}</p>
      <p className={styles.answer}>{answer}</p>
    </section>
  );
};
