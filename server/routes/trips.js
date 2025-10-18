const express = require('express');
const router = express.Router();
const { createTrip, getUserTrips } = require('../controllers/tripController');
const { protect } = require('../middleware/authMiddleware');

// @route   POST api/trips
// @desc    Create a new trip
// @access  Private (requires token)
router.post('/', protect, createTrip);

// ... other trip routes

// Route to generate a trip report
router.post('/:id/generate-report', protect, generateTripReport); // POST request to generate

// @route   GET api/trips
// @desc    Get all trips for a user
// @access  Private (requires token)
router.get('/', protect, getUserTrips);

module.exports = router;