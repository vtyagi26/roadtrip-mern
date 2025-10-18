import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './MyTrips.css'; // Make sure this CSS file exists in the same directory

const MyTrips = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loadingReport, setLoadingReport] = useState({}); // State for loading indicator per trip
  const [errorReport, setErrorReport] = useState({});   // State for error messages per trip
  const navigate = useNavigate();

  // --- Fetch Trips Effect ---
  useEffect(() => {
    const fetchTrips = async () => {
      const userInfo = JSON.parse(localStorage.getItem('user'));
      if (!userInfo || !userInfo.token) {
        navigate('/login');
        return;
      }

      try {
        const config = {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        };
        // Using relative path '/api/trips' because the proxy is set up in vite.config.js
        const { data } = await axios.get('/api/trips', config);
        setTrips(data);
      } catch (err) {
        setError('Failed to fetch trips. Please try again later.');
        console.error("Fetch Trips Error:", err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrips();
  }, [navigate]);

  // --- Handle Logout ---
  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  // --- Handle Generate Report ---
  const handleGenerateReport = async (tripId) => {
    setLoadingReport(prev => ({ ...prev, [tripId]: true }));
    setErrorReport(prev => ({ ...prev, [tripId]: null })); // Clear previous error

    const userInfo = JSON.parse(localStorage.getItem('user'));
    if (!userInfo || !userInfo.token) {
      navigate('/login'); // Redirect if somehow logged out
      return;
    }

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      // Using relative path because proxy is set up
      const { data: updatedTrip } = await axios.post(
        `/api/trips/${tripId}/generate-report`,
        {}, // No request body needed
        config
      );

      // Update the state for the specific trip that was updated
      setTrips(prevTrips =>
        prevTrips.map(trip =>
          trip._id === tripId ? updatedTrip : trip
        )
      );

    } catch (err) {
      console.error("Error generating report:", err);
      const message = err.response?.data?.message || err.message || 'Failed to generate report';
      setErrorReport(prev => ({ ...prev, [tripId]: message }));
    } finally {
      setLoadingReport(prev => ({ ...prev, [tripId]: false }));
    }
  };


  // --- Render Logic ---
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
              <p><strong>From:</strong> {trip.startLocation?.address || 'N/A'}</p> {/* Optional chaining */}
              <p><strong>To:</strong> {trip.endLocation?.address || 'N/A'}</p>     {/* Optional chaining */}
              <p><strong>Duration:</strong> {trip.numberOfDays} days</p>

              {/* Display Generated Report if it exists */}
              {trip.generatedReport && (
                <div className="report-section">
                  <h4>AI Generated Summary:</h4>
                  <p style={{ whiteSpace: 'pre-wrap' }}>{trip.generatedReport}</p> {/* Use pre-wrap to respect newlines */}
                </div>
              )}

              {/* Generate Report Button */}
              <button
                onClick={() => handleGenerateReport(trip._id)}
                // Disable button if loading or if report already exists (check if trip.generatedReport is truthy)
                disabled={loadingReport[trip._id] || !!trip.generatedReport}
                className="generate-report-btn"
              >
                {loadingReport[trip._id]
                  ? 'Generating...'
                  : trip.generatedReport
                  ? 'Report Generated' // Change text if report exists
                  : '✨ Generate AI Report'}
              </button>

               {/* Display Error if report generation failed */}
               {errorReport[trip._id] && (
                  <p className="error-message report-error">Error: {errorReport[trip._id]}</p>
               )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyTrips;