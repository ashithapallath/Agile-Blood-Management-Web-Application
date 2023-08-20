import React, { useState } from 'react';
import './AdminHomepage.css'; // Import your CSS for styling
import Table1 from './Table1'; // Import your Table1 component
import Table2 from './Table2'; // Import your Table2 component
import Table3 from './Table3'; // Import your Table2 component
import Table4 from './Table4'; // Import your Table2 component

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
  
  } else if (currentPage === 'donors') {
    
      // Render Table1 component for donors
      mainContent = <Table1 />;
    } else if (currentPage === 'table2') {
      // Render Table2 component for requests
      mainContent = <Table2 />;
    }
    else if (currentPage === 'table3') {
      // Render Table2 component for requests
      mainContent = <Table3 />;
    }
    else if (currentPage === 'table4') {
      // Render Table2 component for requests
      mainContent = <Table4 />;
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
              <a href="#" className="sidebar-link" onClick={() => handleSidebarLinkClick('table2')}>
                Request
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link" onClick={() => handleSidebarLinkClick('table3')}>
                Blood Request
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link" onClick={() => handleSidebarLinkClick('table4')}>
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