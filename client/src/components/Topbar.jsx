import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Topbar.css';

export default function Topbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check login status when the component mounts
  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    // Redirect to home page after logout to refresh the state
    navigate('/'); 
    window.location.reload(); // Force a reload to ensure sidebar updates
  };

  return (
    <div className="topbar">
      <div className="topbar-left">
        <h1 className="logo">
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            RoadTrip Planner
          </Link>
        </h1>
      </div>
      
      <div className="topbar-center">
        {/* Search input remains */}
      </div>

      <div className="topbar-right">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        
        {/* --- Dynamic Login/Logout Button --- */}
        {isLoggedIn ? (
          <button onClick={handleLogout} className="topbar-auth-btn">
            Logout
          </button>
        ) : (
          <Link to="/login" className="topbar-auth-btn">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}