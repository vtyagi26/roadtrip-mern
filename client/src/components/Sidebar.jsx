import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/analytics">Analytics</a></li>
        <li><a href="/expenditure">Expenditure</a></li>
        <li><a href="/distance">Distance</a></li>
        <li><a href="/recommendations">Recommendations</a></li>
      </ul>
    </div>
  );
}
