import React from 'react';

import { Intro } from '../modules/Intro';
import { Description } from '../modules/Description';
import { ImageUpload } from '../modules/ImageUpload';
import { Benefits } from '../modules/Benefits';

export const Home: React.FC = () => {
  return (
    <>
      <Intro />
      <Description />
      <ImageUpload />
      <Benefits />
    </>
  );
};
