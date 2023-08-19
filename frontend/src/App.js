
import React from 'react';
import Homepage from './Homepage';
import Register from './Register';
import AdminSign from './AdminSign';
import UserHome from './UserHome';
import AdminDash from './AdminDash';
import Login from './Login';
import Table1 from './Table1';


const App = () => {
  const [currentPage, setCurrentPage] = React.useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Homepage onPageChange={handlePageChange} />;
        case 'home':
        return <Table1 onPageChange={handlePageChange} />;
      case 'Table1':
        return <Login onPageChange={handlePageChange} />;
      case 'register':
        return <Register onPageChange={handlePageChange} />;
        case 'adminsignin':
          return <AdminSign onPageChange={handlePageChange} />;
        case 'userhome':
          return <UserHome onPageChange={handlePageChange} />;
          case 'admindash':
          return <AdminDash onPageChange={handlePageChange} />;
        default:
        return <Homepage onPageChange={handlePageChange} />;
    }
    
  };

  return (
    <div>
      
      {renderPage()}
    </div>
  );
};

export default App;
