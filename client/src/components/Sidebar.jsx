import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user info exists in localStorage
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user); // Set to true if user exists, false otherwise
  }, []);

  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        
        {/* --- Conditional Links for Logged-In Users --- */}
        {isLoggedIn && (
          <>
            <li><Link to="/mytrips">My Trips</Link></li>
            <li><Link to="/analytics">Analytics</Link></li>
            <li><Link to="/expenditure">Expenditure</Link></li>
            <li><Link to="/distance">Distance</Link></li>
            <li><Link to="/recommendations">Recommendations</Link></li>
          </>
        )}
      </ul>
    </div>
  );
}