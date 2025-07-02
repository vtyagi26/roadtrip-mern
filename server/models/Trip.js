const mongoose = require('mongoose');

const TripSchema = new mongoose.Schema({
  origin: String,
  destination: String,
  startDate: Date,
  endDate: Date,
  preferences: [String],
  itinerary: [Object], // will hold day-wise plan
}, { timestamps: true });

module.exports = mongoose.model('Trip', TripSchema);
