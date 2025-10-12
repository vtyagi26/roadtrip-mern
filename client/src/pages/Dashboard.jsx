// src/pages/Home.jsx
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="animated-heading">
          <Typewriter
            words={[
              "Plan Your Road Trip",
              "Have a Chill Out",
              "Escape the City",
              "Hit the Open Road",
              "Adventure Awaits!"
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={60}
            delaySpeed={1500}
          />
        </h1>

        <form className="trip-form">
          <div className="form-group">
            <label htmlFor="start">Start Location:</label>
            <input type="text" id="start" name="start" placeholder="Enter starting point" />
          </div>
          <div className="form-group">
            <label htmlFor="end">End Location:</label>
            <input type="text" id="end" name="end" placeholder="Enter destination" />
          </div>
          <div className="form-group">
            <label htmlFor="days">Number of Days:</label>
            <input type="number" id="days" name="days" min="1" placeholder="e.g. 5" />
          </div>
          <button type="submit">Generate Trip</button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
