const Trip = require('../models/Trip');

//Generate
const generateTrip = async (req, res) => {
  const { origin, destination, startDate, endDate, preferences } = req.body;

  const itinerary = [
    { day: 1, plan: `Start at ${origin}, drive to midway.` },
    { day: 2, plan: `Arrive at ${destination}, explore.` }
  ];

  const newTrip = new Trip({
    origin,
    destination,
    startDate,
    endDate,
    preferences,
    itinerary
  });

  await newTrip.save();
  res.json({ message: "Trip generated!", trip: newTrip });
};

// 🆕 GET /api/trip/:id
const getTripById = async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id);
    if (!trip) return res.status(404).json({ error: 'Trip not found' });
    res.json(trip);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// 🆕 GET /api/trips
const getAllTrips = async (req, res) => {
  try {
    const trips = await Trip.find(); // Later you can add a user filter
    res.json(trips);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  generateTrip,
  getTripById,
  getAllTrips,
};
