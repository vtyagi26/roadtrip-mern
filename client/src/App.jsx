import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Analytics from "./pages/Analytics";
import Expenditure from "./pages/Expenditure";
import Distance from "./pages/Distance";
import Recommendations from "./pages/Recommendations";

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="analytics" element={<Analytics />} />
      <Route path="expenditure" element={<Expenditure />} />
      <Route path="distance" element={<Distance />} />
      <Route path="recommendations" element={<Recommendations />} />
    </Route>
  </Routes>
);

export default App;
