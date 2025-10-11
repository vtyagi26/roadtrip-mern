import React from "react";
import "./Distance.css";

const Distance = () => {
  return (
    <div className="distance-page">
      <section className="distance-hero">
        <h1>Distance <span>Calculator</span></h1>
        <p>
          Calculate accurate distances and travel times between multiple destinations to plan your journey better.
        </p>
      </section>

      <section className="distance-tool">
        <h2>Plan Your Route</h2>
        <form className="distance-form">
          <input type="text" placeholder="Enter starting point" />
          <input type="text" placeholder="Enter destination" />
          <button type="submit">Calculate</button>
        </form>
      </section>

      <section className="distance-result">
        <h2>Result</h2>
        <div className="result-placeholder">
          <p>Distance and route map will appear here.</p>
        </div>
      </section>
    </div>
  );
};

export default Distance;
