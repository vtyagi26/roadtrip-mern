const asyncHandler = require('express-async-handler');
const Trip = require('../models/Trip'); // Ensure path is correct
const OpenAI = require('openai');

// NOTE: We are NOT initializing the OpenAI client here at the top level anymore.

// @desc    Create a new trip
// @route   POST /api/trips
// @access  Private
const createTrip = asyncHandler(async (req, res) => {
  const { tripName, startLocation, endLocation, numberOfDays } = req.body;

  if (!tripName || !startLocation || !endLocation || numberOfDays == null) {
    res.status(400);
    throw new Error('Please provide all required trip details');
  }

  const trip = new Trip({
    tripName,
    startLocation,
    endLocation,
    numberOfDays,
    user: req.user.id, // Assumes authMiddleware sets req.user.id correctly
  });

  const createdTrip = await trip.save();
  res.status(201).json(createdTrip);
});

// @desc    Get all trips for a logged-in user
// @route   GET /api/trips
// @access  Private
const getUserTrips = asyncHandler(async (req, res) => {
  // Ensure req.user exists and has an id property
  if (!req.user || !req.user.id) {
    res.status(401);
    throw new Error('Not authorized, user not found or token failed');
  }
  const trips = await Trip.find({ user: req.user.id });
  res.json(trips);
});


// @desc    Generate a report for a specific trip using AI
// @route   POST /api/trips/:id/generate-report
// @access  Private
const generateTripReport = asyncHandler(async (req, res) => {
  // Ensure req.user exists and has an id property
  if (!req.user || !req.user.id) {
    res.status(401);
    throw new Error('Not authorized, user not found or token failed');
  }

  // *** FIX: Initialize OpenAI client INSIDE the function. ***
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
      res.status(500);
      throw new Error('Server configuration error: OpenAI API key is missing.');
  }

  const openai = new OpenAI({ apiKey }); // Use the variable

  const trip = await Trip.findById(req.params.id);

  if (!trip) {
    res.status(404);
    throw new Error('Trip not found');
  }

  // Ensure the logged-in user owns the trip
  if (trip.user.toString() !== req.user.id) {
     res.status(401);
     throw new Error('User not authorized to access this trip');
  }

  // Prevent re-generating if a report already exists
  if (trip.generatedReport) {
    res.status(400);
    throw new Error('A report for this trip has already been generated.');
  }

  try {
    const prompt = `Generate a travel itinerary and summary for a road trip.
      - Trip Name: "${trip.tripName}"
      - From: ${trip.startLocation.address}
      - To: ${trip.endLocation.address}
      - Duration: ${trip.numberOfDays} days

      Create a short, engaging summary (around 150 words) that includes potential highlights, suggested activities (like sightseeing, food, adventure), and a concluding sentence making it sound exciting.`;

    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'gpt-3.5-turbo',
      max_tokens: 250,
    });

    const reportText = completion.choices[0]?.message?.content?.trim();

    if (!reportText) {
      throw new Error('Failed to get a valid response from the AI model.');
    }

    // Save the report to the trip document
    trip.generatedReport = reportText;
    const updatedTrip = await trip.save();

    res.status(200).json(updatedTrip); // Send back the updated trip

  } catch (error) {
    console.error('AI Report Generation Error:', error);
    if (error instanceof OpenAI.APIError) { // Specific OpenAI error handling
        res.status(error.status || 500);
        throw new Error(`OpenAI API Error: ${error.message}`);
    }
    // General server error
    res.status(500);
    throw new Error('Server error: Could not generate trip report.');
  }
});

module.exports = {
  createTrip,
  getUserTrips,
  generateTripReport,
};