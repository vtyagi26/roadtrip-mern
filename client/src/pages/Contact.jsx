import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <h1>Contact <span>RoadTrip Planner</span></h1>
        <p>
          Have a question, feedback, or partnership idea?  
          We’d love to hear from you! Reach out and let’s make your next journey unforgettable.
        </p>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info">
        <div className="info-card">
          <i className="fas fa-envelope"></i>
          <h3>Email Us</h3>
          <p>support@roadtripplanner.com</p>
        </div>
        <div className="info-card">
          <i className="fas fa-phone-alt"></i>
          <h3>Call Us</h3>
          <p>+91 98765 43210</p>
        </div>
        <div className="info-card">
          <i className="fas fa-map-marker-alt"></i>
          <h3>Visit Us</h3>
          <p>123 Explorer Street, New Delhi, India</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <h2>Send Us a Message</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" rows="5" placeholder="Write your message..." required />
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </section>

      {/* Optional Map Section */}
      <section className="contact-map">
        <h2>Find Us</h2>
        <div className="map-placeholder">
          <p>Map integration coming soon...</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
