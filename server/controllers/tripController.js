const Trip = require('../models/Trip');

// @desc    Create a new trip
const createTrip = async (req, res) => {
  try {
    const { tripName, startLocation, endLocation, numberOfDays } = req.body;

    // Create a new trip document
    const trip = new Trip({
      tripName,
      startLocation,
      endLocation,
      numberOfDays,
      user: req.user.id, // Get the user ID from the middleware
    });

    const createdTrip = await trip.save();
    res.status(201).json(createdTrip);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Get all trips for a logged-in user
const getUserTrips = async (req, res) => {
  try {
    // Find all trips where the 'user' field matches the logged-in user's ID
    const trips = await Trip.find({ user: req.user.id });
    res.json(trips);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  createTrip,
  getUserTrips,
};