import React from 'react';
import Login from "./Login";
import bloodDonationImage from './hiii.png';
import './App.css';
import AdminSign from './AdminSign';

function Homepage() {
  const [showLogin, setShowLogin] = React.useState(false);
  const [showAdminSign, setShowAdminSign] = React.useState(false);

  const handleAdminLogin = () => {
    setShowAdminSign(true);
  };
  
  const handleUserLogin = () => {
    setShowLogin(true);
  };

  return (
    <div>
      {showLogin ? (
        <Login onFormSwitch={() => setShowLogin(false)} />
      ) : showAdminSign ? (
        <AdminSign onFormSwitch={() => setShowAdminSign(false)} />
      ) : (
        <div>
          <header className="homepage-header">
            <nav>
              <ul>
                <li><a href="/about">About</a></li>
                <li><a href="tel:+1-800-555-1234">Call Us</a></li>
                <li><a href="mailto:info@blooddonation.com">Email</a></li>
              </ul>
            </nav>
          </header>
          <main>
            <h1>Donate blood and gift someone a precious life.</h1>
            <h2>Donate Blood, Save Lives</h2>
            <div>
              <button onClick={handleAdminLogin}>Admin Login</button>
              <button onClick={handleUserLogin}>User Login</button>
            </div>
            <img src={bloodDonationImage} alt="Blood Donation" /> 
            <p>Join our mission to help those in need by donating blood. Every donation can make a difference in someone's life.</p>
          </main>
          <footer>
            <p>&copy; 2023 Blood Donation Inc. All rights reserved.</p>
          </footer>
        </div>
      )}
    </div>
  );
}

export default Homepage;
