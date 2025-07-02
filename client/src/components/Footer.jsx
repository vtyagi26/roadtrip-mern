import React from 'react';

const Footer = () => (
  <footer className="bg-blue-700 text-white p-4 text-center">
    <div>© {new Date().getFullYear()} RoadTrip Planner.</div>
    <div className="space-x-4 mt-2">
      <a href="#" className="hover:underline">About Us</a>
      <a href="#" className="hover:underline">Contact Us</a>
      <a href="#" className="hover:underline">Privacy Policy</a>
    </div>
  </footer>
);

export default Footer;