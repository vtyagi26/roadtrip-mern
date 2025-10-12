import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './MyTrips.css'; // We'll create this file for styling

const MyTrips = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrips = async () => {
      // 1. Get user info from localStorage
      const userInfo = JSON.parse(localStorage.getItem('user'));

      // 2. If no user info/token, redirect to login page
      if (!userInfo || !userInfo.token) {
        navigate('/login');
        return;
      }

      try {
        // 3. Prepare the authorization header
        const config = {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        };

        // 4. Make the authenticated API call
        const { data } = await axios.get('http://localhost:5000/api/trips', config);
        setTrips(data);
      } catch (err) {
        setError('Failed to fetch trips. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrips();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (loading) {
    return <div className="loading-message">Loading your trips...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="my-trips-container">
      <div className="header">
        <h1>My Saved Trips</h1>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
      
      {trips.length === 0 ? (
        <p className="no-trips-message">You haven't saved any trips yet. Plan one from the Home page!</p>
      ) : (
        <ul className="trips-list">
          {trips.map((trip) => (
            <li key={trip._id} className="trip-item">
              <h2>{trip.tripName}</h2>
              <p><strong>From:</strong> {trip.startLocation.address}</p>
              <p><strong>To:</strong> {trip.endLocation.address}</p>
              <p><strong>Duration:</strong> {trip.numberOfDays} days</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyTrips;