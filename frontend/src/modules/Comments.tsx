import React from 'react';

import { Comment } from '../components/Comment';

import styles from '../scss/Comments.module.scss';

export const Comments: React.FC = () => {
  return (
    <div className={styles.container}>
      <Comment
        userIconUrl="https://i.pinimg.com/564x/40/76/79/407679d20088c659aba7a760c69dd7c3.jpg"
        text="Never knew checking images could be so easy and fun! Great job!"
        username="Emily Watson"
      />
      <Comment
        userIconUrl="https://i.pinimg.com/236x/c4/ef/3a/c4ef3a40e0ef94f77f77419ed25aa4d1.jpg"
        text="Super helpful tool, especially for my blog! Thanks!"
        username="Henry Campbell"
      />
      <Comment
        userIconUrl="https://i.pinimg.com/236x/5a/a0/46/5aa046176a84cd879838b73540d2d357.jpg"
        text="This website is a game changer for content moderators!"
        username="Mark Stevens"
      />
    </div>
  );
};
