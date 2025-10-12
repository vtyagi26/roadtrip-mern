import React from "react";
import { Routes, Route } from "react-router-dom";

// Layouts
import Layout from "./components/Layout";
import AuthLayout from './components/AuthLayout';

// Pages
import Dashboard from './pages/Dashboard'; // The main page
import About from "./pages/About";
import Contact from "./pages/Contact";
import Analytics from "./pages/Analytics";
import Expenditure from "./pages/Expenditure";
import Distance from "./pages/Distance";
import Recommendations from "./pages/Recommendations";
import Login from "./pages/Login";
import MyTrips from "./pages/Mytrips";

const App = () => (
  <Routes>
    {/* The main layout now handles the root path "/" */}
    <Route path="/" element={<Layout />}>
      {/* The Dashboard is now the index page, visible to everyone */}
      <Route index element={<Dashboard />} /> 
      
      {/* These routes will be protected by the links in the dynamic sidebar */}
      <Route path="mytrips" element={<MyTrips />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="analytics" element={<Analytics />} />
      <Route path="expenditure" element={<Expenditure />} />
      <Route path="distance" element={<Distance />} />
      <Route path="recommendations" element={<Recommendations />} />
    </Route>

    {/* Auth routes still use their own layout */}
    <Route element={<AuthLayout />}>
      <Route path="/login" element={<Login />} />
      {/* <Route path="/register" element={<Register />} /> */}
    </Route>
  </Routes>
);

export default App;