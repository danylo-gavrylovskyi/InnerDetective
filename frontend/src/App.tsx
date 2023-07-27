import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import axios from './axios';

import { Home } from './pages/Home';
import { ImageResults } from './pages/ImageResults';
import { Registration } from './pages/Registration';
import { Login } from './pages/Login';

const App: React.FC = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    (async () => {
      try {
        await axios.get('/api/me');
      } catch (error) {
        navigate('/login');
        console.log(error);
      }
    })();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
