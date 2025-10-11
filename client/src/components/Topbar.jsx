import React from "react";
import "./Topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <h1 className="logo">RoadTrip Planner</h1>
      </div>

      <div className="topbar-center">
        <input
          type="text"
          placeholder="Search location..."
          className="search-input"
        />
      </div>

      <div className="topbar-right">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <select className="lang-dropdown">
          <option>EN</option>
          <option>HI</option>
        </select>
      </div>
    </div>
  );
}
