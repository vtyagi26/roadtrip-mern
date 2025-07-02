const Trip = require('../models/Trip');

const generateTrip = async (req, res) => {
  const { origin, destination, startDate, endDate, preferences } = req.body;

  // Dummy data for now
  const itinerary = [
    { day: 1, plan: `Start at ${origin}, drive to midway point.` },
    { day: 2, plan: `Arrive at ${destination}, explore local places.` }
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

module.exports = { generateTrip };
