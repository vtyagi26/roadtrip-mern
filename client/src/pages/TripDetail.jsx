import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const TripDetail = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/fetch/${id}`)
      .then(res => setTrip(res.data))
      .catch(err => console.error("Failed to fetch trip", err));
  }, [id]);

  if (!trip) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">Trip Details</h2>
      <p><strong>Start:</strong> {trip.startLocation}</p>
      <p><strong>End:</strong> {trip.endLocation}</p>
      <p><strong>Dates:</strong> {trip.dates}</p>
      <p><strong>Preferences:</strong> {trip.preferences}</p>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Itinerary:</h3>
        <pre className="bg-gray-100 p-4 rounded">{trip.generatedItinerary}</pre>
      </div>
    </div>
  );
};
