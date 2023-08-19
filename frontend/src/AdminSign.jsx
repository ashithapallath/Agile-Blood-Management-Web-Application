/*

import React from 'react';
import './App.css';
import LoginImage from './image 25.png';

function AdminSign(props) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // perform AdminSign logic here
  };

  return (
    <div className="AdminSign-container">
      <div className="AdminSign-image-container">
        <img src={LoginImage} alt="Login" className="AdminSign-image" />
      </div>
      <form className="AdminSign-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username-input" className="AdminSign-label">Username:</label>
          <input
            type="text"
            id="username-input"
            className="AdminSign-input"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password-input" className="AdminSign-label">Password:</label>
          <input
            type="password"
            id="password-input"
            className="AdminSign-input"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="AdminSign-button">Sign In</button>
        </div>
      </form>
    </div>
  );
}

export default AdminSign;*/

import React, { useState } from 'react';
import './App.css';
import LoginImage from './image 25.png';
import AdminDash from './AdminDash';

function AdminSign(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // perform AdminSign logic here
    // if the login is successful, set loggedIn state to true
    setLoggedIn(true);
  };

  if (loggedIn) {
    return <AdminDash />;
  }

  return (
    <div className="AdminSign-container">
      <div className="AdminSign-image-container">
        <img src={LoginImage} alt="Login" className="AdminSign-image" />
      </div>
      <form className="AdminSign-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username-input" className="AdminSign-label">
            Username:
          </label>
          <input
            type="text"
            id="username-input"
            className="AdminSign-input"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password-input" className="AdminSign-label">
            Password:
          </label>
          <input
            type="password"
            id="password-input"
            className="AdminSign-input"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="AdminSign-button">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminSign;
