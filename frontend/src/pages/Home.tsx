import React from 'react';

import { Intro } from '../modules/Intro';
import { Description } from '../modules/Description';
import { ImageUpload } from '../modules/ImageUpload';
import { Benefits } from '../modules/Benefits';
import { Comments } from '../modules/Comments';
import { Questions } from '../modules/Questions';

export const Home: React.FC = () => {
  return (
    <div>
      <Intro />
      <Description />
      <ImageUpload />
      <Benefits />
      <Comments />
      <Questions />
    </div>
  );
};
