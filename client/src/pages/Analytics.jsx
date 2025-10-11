import React from "react";
import "./Analytics.css";

const Analytics = () => {
  return (
    <div className="analytics-page">
      <section className="analytics-hero">
        <h1>Trip <span>Analytics</span></h1>
        <p>
          Get deep insights into your road trips — mileage trends, route efficiency, and travel statistics, all in one dashboard.
        </p>
      </section>

      <section className="analytics-summary">
        <div className="summary-card">
          <h3>Total Trips</h3>
          <p>12</p>
        </div>
        <div className="summary-card">
          <h3>Average Distance</h3>
          <p>845 km</p>
        </div>
        <div className="summary-card">
          <h3>Total Expenditure</h3>
          <p>₹32,400</p>
        </div>
      </section>

      <section className="analytics-charts">
        <h2>Performance Overview</h2>
        <div className="chart-placeholder">
          <p>Chart visualizations will appear here.</p>
        </div>
      </section>
    </div>
  );
};

export default Analytics;
