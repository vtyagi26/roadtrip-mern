import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Analytics from './pages/Analytics';
import Expenditure from './pages/Expenditure';
import Distance from './pages/Distance';
import Recommendations from './pages/Recommendations';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<Home />} />
      <Route path="contact" element={<Home />} />
      <Route path="analytics" element={<Home />} />
      <Route path="trips" element={<Home />} />
      <Route path="expenditure" element={<Home />} />
      <Route path="distance" element={<Home />} />
      <Route path="recommendations" element={<Home />} />
    </Route>
  </Routes>
);

export default App;