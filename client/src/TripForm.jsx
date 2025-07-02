import React, { useState } from 'react';
import axios from 'axios';

const TripForm = () => {
  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    startDate: '',
    endDate: '',
    preferences: ''
  });

  const [itinerary, setItinerary] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setItinerary(null);

    try {
      const response = await axios.post('http://localhost:5000/api/trip/generate', {
        ...formData,
        preferences: formData.preferences.split(',').map(p => p.trim())
      });

      setItinerary(response.data.trip);
    } catch (err) {
      setError('Failed to generate trip. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen px-4 py-10 bg-gradient-to-br from-blue-100 via-white to-blue-200">
      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">Road Trip Itinerary Generator</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="origin" placeholder="Origin" onChange={handleChange} required className="input" />
            <input name="destination" placeholder="Destination" onChange={handleChange} required className="input" />
            <input type="date" name="startDate" onChange={handleChange} required className="input" />
            <input type="date" name="endDate" onChange={handleChange} required className="input" />
          </div>

          <input name="preferences" placeholder="Preferences (comma separated)" onChange={handleChange} className="input w-full" />

          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
            {loading ? "Generating..." : "Generate Itinerary"}
          </button>

          {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
        </form>

        {itinerary && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">Generated Itinerary:</h2>
            <div className="space-y-4">
              {itinerary.itinerary.map((day, idx) => (
                <div key={idx} className="bg-blue-50 p-4 rounded-xl shadow-sm border-l-4 border-blue-500">
                  <p className="text-lg font-medium text-blue-700">Day {day.day}</p>
                  <p className="text-gray-700">{day.plan}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TripForm;
