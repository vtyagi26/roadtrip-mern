const asyncHandler = require('express-async-handler');
const Trip = require('../models/Trip');
const User = require('../models/User'); // Keep if needed elsewhere, otherwise remove
const OpenAI = require('openai');
require('dotenv').config(); // Ensure dotenv is configured, ideally in server.js

// --- Instantiate OpenAI Client ---
// It's generally better to instantiate this once, maybe in a separate config file
// But placing it here works for simplicity
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Load key from .env file
});


// @desc    Create a new trip
// @route   POST /api/trips
// @access  Private (Assumed based on req.user.id usage)
const createTrip = asyncHandler(async (req, res) => {
  // Original createTrip logic - wrapped with asyncHandler
  const { tripName, startLocation, endLocation, numberOfDays } = req.body;

  // Basic validation (you might want more robust validation)
  if (!tripName || !startLocation || !endLocation || numberOfDays == null) {
      res.status(400);
      throw new Error('Please provide tripName, startLocation, endLocation, and numberOfDays');
  }

  const trip = new Trip({
    tripName,
    startLocation,
    endLocation,
    numberOfDays,
    user: req.user.id, // Ensure your authMiddleware sets req.user.id
  });

  const createdTrip = await trip.save();
  res.status(201).json(createdTrip);
});


// @desc    Get all trips for a logged-in user
// @route   GET /api/trips
// @access  Private (Assumed based on req.user.id usage)
const getUserTrips = asyncHandler(async (req, res) => {
  // Original getUserTrips logic - wrapped with asyncHandler
  const trips = await Trip.find({ user: req.user.id }); // Ensure req.user.id is available
  res.json(trips);
});


// @desc    Generate a report for a specific trip
// @route   POST /api/trips/:id/generate-report
// @access  Private
const generateTripReport = asyncHandler(async (req, res) => {
  const trip = await Trip.findById(req.params.id);

  if (!trip) {
    res.status(404);
    throw new Error('Trip not found');
  }

  // Ensure the logged-in user owns the trip
  if (!req.user || trip.user.toString() !== req.user.id) { // Added check for req.user existence
     res.status(401);
     throw new Error('User not authorized');
  }

  // --- OpenAI API Call ---
  try {
    // Construct a prompt for the AI using available trip details
    const prompt = `Generate a concise travel report summary for a road trip with the following details:
                   Trip Name: ${trip.tripName}
                   Start Location: ${trip.startLocation?.address || 'Not specified'}
                   End Location: ${trip.endLocation?.address || 'Not specified'}
                   Duration: ${trip.numberOfDays} days.
                   Include potential highlights, suggested activities based on the locations, and a brief thematic summary. Keep it engaging and under 150 words.`; // Refined prompt

    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'gpt-3.5-turbo', // Or 'gpt-4' if you have access
      max_tokens: 200 // Adjust token limit as needed
    });

    const reportText = completion.choices[0]?.message?.content?.trim();

    if (!reportText) {
         throw new Error('Failed to generate report text from AI');
    }

    // --- Save Report to MongoDB ---
    trip.generatedReport = reportText;
    const updatedTrip = await trip.save();

    res.status(200).json(updatedTrip); // Send back the updated trip with the report

  } catch (error) {
    console.error('Error generating trip report:', error);
    res.status(500);
    // Provide a more specific error message if possible
    throw new Error(`Could not generate trip report. ${error.message || ''}`);
  }
});


module.exports = {
  createTrip,
  getUserTrips,
  generateTripReport, // Export the new function
};