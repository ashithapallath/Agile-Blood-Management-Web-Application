import React, { useState } from 'react';
import './AdminHomepage.css'; // Import your CSS for styling

import Table1 from './Table1.jsx'; // Import your Table1 component

const AdminDash = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState('dashboard'); // Default to 'dashboard'

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSidebarLinkClick = (page) => {
    setCurrentPage(page);
  };

  let mainContent = null;

  if (currentPage === 'dashboard') {
    // Render dashboard content here
    mainContent = <div>Dashboard Content</div>;
  } else if (currentPage === 'donors') {
    // Render Table1 component for donors
    mainContent = <Table1 />;
  }
  // Add more conditions for other pages

  return (
    <div className={`admin-homepage ${sidebarOpen ? 'sidebar-open' : ''}`}>
      <header>
        {/* Header content */}
      </header>
      
      <nav className="sidebar">
        <div className="logo">
          {/* Logo */}
        </div>
        <ul className="sidebar-menu">
          <li className="sidebar-item">
            <a href="#" className="sidebar-link" onClick={() => handleSidebarLinkClick('dashboard')}>
              Dashboard
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link" onClick={() => handleSidebarLinkClick('donors')}>
              Donors
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link" onClick={() => handleSidebarLinkClick('donors')}>
              Request
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link" onClick={() => handleSidebarLinkClick('donors')}>
            Blood Request
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link" onClick={() => handleSidebarLinkClick('donors')}>
              Donations
            </a>
          </li>
          {/* Add links for other pages */}
        </ul>
        <div className="close-button" onClick={toggleSidebar}>
          {/* Close button icon */}
        </div>
      </nav>

      <main className="main-content">
        {mainContent}
      </main>

      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default AdminDash;


