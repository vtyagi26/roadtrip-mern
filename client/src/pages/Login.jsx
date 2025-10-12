import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        email,
        password,
      });

      if (response.data) {
        // Save the user info and token to the browser's storage
        localStorage.setItem('user', JSON.stringify(response.data));
        alert('Login successful!');
        
        // UPDATED: Redirect to the main page (Dashboard)
        navigate('/');
        
        // CRITICAL: Force a reload to update the state of other components
        // like the Sidebar and Topbar.
        window.location.reload(); 
      }
    } catch (error) {
      console.error('Login failed:', error.response?.data?.message || 'An error occurred');
      alert('Login failed: ' + (error.response?.data?.message || 'Please check your credentials'));
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Welcome Back!</h2>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-btn">Log In</button>
        <div className="register-link">
          <p>Don't have an account? <Link to="/register">Register here</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Login;

