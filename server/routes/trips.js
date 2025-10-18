const express = require('express');
const router = express.Router();
// *** FIX: Correctly destructure all three functions ***
const { createTrip, getUserTrips, generateTripReport } = require('../controllers/tripController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').post(protect, createTrip).get(protect, getUserTrips);

// New route for generating the report
router.route('/:id/generate-report').post(protect, generateTripReport);

module.exports = router;