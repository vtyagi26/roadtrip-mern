const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
  address: { type: String, required: true },
  lat: { type: Number },
  lng: { type: Number },
}, { _id: false }); // _id: false prevents Mongoose from creating an id for subdocuments

const TripSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId, // This is a special type for IDs
    required: true,
    ref: 'User', // This creates the connection to the User model
  },
  generatedReport: {
    type: String
  },
  tripName: {
    type: String,
    required: true,
  },
  startLocation: {
    type: LocationSchema,
    required: true,
  },
  endLocation: {
    type: LocationSchema,
    required: true,
  },
  numberOfDays: {
    type: Number,
    required: true,
  },
  // We can add more fields like waypoints, distance, etc. later
}, {
  timestamps: true,
});

module.exports = mongoose.model('Trip', TripSchema);