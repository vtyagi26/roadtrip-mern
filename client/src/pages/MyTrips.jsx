import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MyTrips = () => {
  const [trips, setTrips] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/api/list')
      .then(res => setTrips(res.data))
      .catch(err => console.error("Failed to load trips", err));
  }, []);

  const viewTrip = (id) => {
    navigate(`/trip/${id}`);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">My Trips</h2>
      <ul>
        {trips.map(trip => (
          <li key={trip._id} onClick={() => viewTrip(trip._id)} className="cursor-pointer hover:bg-gray-100 p-2 rounded">
            <strong>{trip.startLocation} ➝ {trip.endLocation}</strong> ({trip.dates})
          </li>
        ))}
      </ul>
    </div>
  );
};
