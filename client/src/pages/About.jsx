import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About <span>RoadTrip Planner</span></h1>
        <p>
          Plan smarter, travel farther — RoadTrip Planner helps you design unforgettable journeys 
          with optimized routes, smart budgeting, and personalized recommendations.
        </p>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          We believe every road trip should be an adventure — not a hassle. 
          Our mission is to empower travelers to explore confidently with 
          accurate travel analytics, cost forecasts, and destination insights 
          powered by data-driven technology.
        </p>
      </section>

      {/* How It Works Section */}
      <section className="about-how">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <h3>1. Plan Your Route</h3>
            <p>
              Enter your starting point and destination. We’ll find the best route with scenic spots,
              rest stops, and fuel-efficient paths.
            </p>
          </div>
          <div className="step">
            <h3>2. Estimate Your Costs</h3>
            <p>
              Get accurate expenditure forecasts including fuel, tolls, accommodation, and food costs
              based on real data.
            </p>
          </div>
          <div className="step">
            <h3>3. Get Personalized Insights</h3>
            <p>
              Receive trip recommendations and analytics tailored to your preferences — whether 
              you prefer speed, budget, or adventure.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="about-features">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Smart Itinerary Generator</h3>
            <p>
              AI-powered itinerary creation helps you save time by generating 
              optimized day-by-day travel plans.
            </p>
          </div>
          <div className="feature-card">
            <h3>Expense Tracker</h3>
            <p>
              Track and categorize trip expenses in real-time to stay within budget.
            </p>
          </div>
          <div className="feature-card">
            <h3>Distance & Time Analytics</h3>
            <p>
              Compare routes and get distance breakdowns, travel time, and fuel predictions.
            </p>
          </div>
          <div className="feature-card">
            <h3>Scenic Recommendations</h3>
            <p>
              Discover hidden gems, local attractions, and must-see stops along your route.
            </p>
          </div>
          <div className="feature-card">
            <h3>Offline Mode (Coming Soon)</h3>
            <p>
              Access essential trip details even when you’re off the grid — perfect for long drives.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="about-vision">
        <h2>Our Vision</h2>
        <p>
          To revolutionize the way people travel — combining technology, sustainability, 
          and adventure to make every journey memorable and meaningful.
        </p>
      </section>
    </div>
  );
};

export default About;
