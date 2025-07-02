const express = require('express');
const router = express.Router();
const { generateTrip, getTripById, getAllTrips } = require('../controllers/tripController');

router.post('/generate', generateTrip);
router.get('/:id', getTripById);
router.get('/', getAllTrips);

module.exports = router;
