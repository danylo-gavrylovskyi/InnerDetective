import React from 'react';

import styles from '../scss/Comment.module.scss';

interface ICommentProps {
  userIconUrl: string;
  text: string;
  username: string;
}

export const Comment: React.FC<ICommentProps> = ({ userIconUrl, text, username }) => {
  return (
    <section className={styles.container}>
      <img src={userIconUrl} alt="user icon"></img>
      <p className={styles.mainText}>{text}</p>
      <p className={styles.usernameFont}>{username}</p>
    </section>
  );
};
