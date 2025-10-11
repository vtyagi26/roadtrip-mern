import React from "react";
import "./Expenditure.css";

const Expenditure = () => {
  return (
    <div className="expenditure-page">
      <section className="expenditure-hero">
        <h1>Trip <span>Expenditure</span></h1>
        <p>
          Track and manage your road trip expenses — from fuel and food to accommodation and tolls.
        </p>
      </section>

      <section className="expenditure-summary">
        <div className="summary-card">
          <h3>Total Spent</h3>
          <p>₹45,000</p>
        </div>
        <div className="summary-card">
          <h3>Average per Trip</h3>
          <p>₹3,750</p>
        </div>
        <div className="summary-card">
          <h3>Most Expensive Trip</h3>
          <p>₹9,800</p>
        </div>
      </section>

      <section className="expenditure-details">
        <h2>Expense Breakdown</h2>
        <div className="table-placeholder">
          <p>Table or pie chart for expense categories will appear here.</p>
        </div>
      </section>
    </div>
  );
};

export default Expenditure;
