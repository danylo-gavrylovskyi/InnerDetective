import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { ImageResults } from '../pages/ImageResults';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/results" element={<ImageResults />}></Route>
    </Routes>
  );
};

export default App;
