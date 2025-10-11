import React from "react";
import "./Recommendations.css";

const Recommendations = () => {
  return (
    <div className="recommendations-page">
      <section className="recommendations-hero">
        <h1>Trip <span>Recommendations</span></h1>
        <p>
          Discover curated travel routes, hidden gems, and personalized trip suggestions based on your past journeys.
        </p>
      </section>

      <section className="recommendations-list">
        <h2>Top Suggestions for You</h2>
        <div className="recommendation-cards">
          <div className="rec-card">
            <h3>Himalayan Adventure</h3>
            <p>Explore scenic mountain roads from Manali to Leh — a perfect mix of thrill and beauty.</p>
          </div>
          <div className="rec-card">
            <h3>Coastal Cruise</h3>
            <p>Drive along India’s western coast from Mumbai to Goa with stunning beaches along the way.</p>
          </div>
          <div className="rec-card">
            <h3>Royal Heritage Route</h3>
            <p>Experience Rajasthan’s royal cities — Jaipur, Jodhpur, and Udaipur — full of color and culture.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recommendations;
