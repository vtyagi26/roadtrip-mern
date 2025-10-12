import React from 'react';
import './Footer.css'; // Don't forget to import your new CSS file

const Footer = () => (
  <footer className="footer">
    <div>© {new Date().getFullYear()} RoadTrip Planner.</div>
    <div>
      <a href="/about" className="footer-link">About Us</a>
      <a href="/contact" className="footer-link">Contact Us</a>
      <a href="#" className="footer-link">Privacy Policy</a>
    </div>
  </footer>
);

export default Footer;