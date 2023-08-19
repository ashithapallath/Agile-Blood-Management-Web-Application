
import React from 'react';
import './App.css';
import LoginImage from './image 25.png';
import UserHome from "./UserHome";
import Register from "./Register";

function Login(props) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showAdminDash, setShowAdminDash] = React.useState(false);
  const [showRegister, setShowRegister] = React.useState(false);

  const handleSignIn = (event) => {
    event.preventDefault();
    setShowAdminDash(true);
  };

  const handleCreateAccount = (event) => {
    event.preventDefault();
    setShowRegister(true);
  }

  return (
    <div className="admin-sign-container">
      {showAdminDash ? (
        <UserHome/>
      ) : showRegister ? (
        <Register />
      ) : (
        <>
          <div className="admin-sign-image-container">
            <img src={LoginImage} alt="Login" className="admin-sign-image" />
          </div>
          <form className="admin-sign-form" onSubmit={handleSignIn}>
            <div className="form-group">
              <label htmlFor="username-input" className="admin-sign-label">
                Username:
              </label>
              <input
                type="text"
                id="username-input"
                className="admin-sign-input"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password-input" className="admin-sign-label">
                Password:
              </label>
              <input
                type="password"
                id="password-input"
                className="admin-sign-input"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="admin-sign-button">
                Sign In
              </button>
              <button onClick={handleCreateAccount} className="admin-sign-link">
                New_User? Create account
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
export default Login;