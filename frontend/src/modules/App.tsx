import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { ImageResults } from '../pages/ImageResults';
import { Registration } from '../pages/Registration';
import { Login } from '../pages/Login';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/results" element={<ImageResults />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/registration" element={<Registration />}></Route>
    </Routes>
  );
};

export default App;
