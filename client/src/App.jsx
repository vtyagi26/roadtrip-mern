import React from 'react';
import { Routes, Route } from 'react-router-dom'; // NOTE: No 'BrowserRouter as Router'
import Layout from './components/Layout';
import PublicNavbar from './components/PublicNavbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import MyTrips from './pages/MyTrips';
import Recommendations from './pages/Recommendations';
import Expenditure from './pages/Expenditure';
import Distance from './pages/Distance';
import Analytics from './pages/Analytics';
import AuthLayout from './components/AuthLayout';

function App() {
  return (
    // The <Router> wrapper has been removed from this file to fix the error.
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Layout><PublicNavbar /><Dashboard /></Layout>} />
      <Route path="/about" element={<Layout><PublicNavbar /><About /></Layout>} />
      <Route path="/contact" element={<Layout><PublicNavbar /><Contact /></Layout>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Private Routes */}
      <Route path="/dashboard" element={<AuthLayout><Dashboard /></AuthLayout>} />
      <Route path="/mytrips" element={<AuthLayout><MyTrips /></AuthLayout>} />
      <Route path="/recommendations" element={<AuthLayout><Recommendations /></AuthLayout>} />
      <Route path="/expenditure" element={<AuthLayout><Expenditure /></AuthLayout>} />
      <Route path="/distance" element={<AuthLayout><Distance /></AuthLayout>} />
      <Route path="/analytics" element={<AuthLayout><Analytics /></AuthLayout>} />
    </Routes>
  );
}

export default App;