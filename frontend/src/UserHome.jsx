
/*
import React, { Component } from 'react';
import './App.css';

class UserHome extends Component {
  render() {
    return (
      <div className="container">
        <img src="/image 26.png" alt="Image 1" className="home-image" />
        
        <button onClick={this.handleRequestClick} className="request-button">Request</button>
        <button onClick={this.handleDonateClick} className="donate-button">Donate</button>
        <header>
          <button onClick={this.handleExitClick} className="exit-button">Exit</button>
        </header>
      </div>
    );
  }

  handleRequestClick() {
    // handle request button click
  }

  handleDonateClick() {
    // handle donate button click
  }

  handleExitClick() {
    // handle exit button click
  }
}

export default UserHome;

*/
import React, { useState } from 'react';
import UserRegister from './UserRegister'; // import the UserRegister component
import UserOO from './UserOO';
import './App.css';
function Homepage() {
  const [showUserRegister, setShowUserRegister] = React.useState(false);
  const [showUserOO, setShowUserOO] = React.useState(false);

  const handleRequestClick = () => {
    setShowUserRegister(true);
  };

  const handleDonateClick = () => {
    setShowUserOO(true);
  };

  return (
    <div>
      {showUserRegister ? (
        <UserRegister onFormSwitch={() => setShowUserRegister(false)} />
      ) : showUserOO ? (
        <UserOO onFormSwitch={() => setShowUserOO(false)} />
      ) : (
    <div className="container">
      <header className="u-header">
        <h1>Blood Donation</h1>
      </header>

      <img src="/image 26.png" alt="Image 1" className="home-image" />

      <button onClick={handleRequestClick} className="request-button">
        Request Blood
      </button>
      <button onClick={handleDonateClick} className="donate-button">
        Donate Blood
      </button>

      {showUserRegister && <UserRegister />} {/* use the UserRegister component */}
      {showUserOO && <UserOO />}

      <footer className="footer">
        <p>&copy; 2023 Blood Donation. All Rights Reserved.</p>
      </footer>
    </div>
    )}
    </div>
  );
}

export default Homepage;
