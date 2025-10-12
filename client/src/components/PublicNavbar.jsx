import React from 'react';
import { Link } from 'react-router-dom';
import './PublicNavbar.css';

const PublicNavbar = () => {
  return (
    <nav className="public-navbar">
      <div className="navbar-brand">
        <Link to="/">RoadTrip Planner</Link>
      </div>

      {/* --- Add this new Link --- */}
      <div className="navbar-actions">
        <Link to="/" className="navbar-back-link">
          ← Back to Home
        </Link>
      </div>

    </nav>
  );
};

export default PublicNavbar;