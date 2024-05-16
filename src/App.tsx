import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '@/layouts';
import Home from '@/pages/home';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
