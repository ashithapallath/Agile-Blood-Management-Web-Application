/*import React, { useState } from "react";

function AdminSign() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleAdminSign = (event) => {
    event.preventDefault();
    // Code to handle AdminSign functionality
  };

  return (
    <div>
      <form onSubmit={handleAdminSign}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="*********"
            id="password"
            name="password"
          />
        </label>
        <br />
        <button type="submit">AdminSign</button>
      </form>
    </div>
  );
}

export default AdminSign;
*/


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

export default AdminSign;
