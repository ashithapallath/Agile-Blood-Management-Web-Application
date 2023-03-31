/*
import React,{useState} from "react";

import reactLogo from "./image 25.png";
import './App.css';
import {Login} from "./Login";
import {Register} from "./Register";




function App() {
  const[currentForm,setCurrentForm]=useState('login'); 

  const toggleForm =(formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register  onFormSwitch={toggleForm}/>    
          }
          <div className="right_data mt-7" styles={{width: "100%"}}>
          <div className="reactLogo mt-9" >
           <img src={reactLogo} alt="React Logo" width="650" height="550"/>

    </div> </div> 
    </div>
  );
}

export default App;
*/


import React from 'react';
import Homepage from './Homepage';
import Login from './Login';
import {Register} from './Register';
import AdminSign from './AdminSign';

const App = () => {
  const [currentPage, setCurrentPage] = React.useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Homepage onPageChange={handlePageChange} />;
      case 'login':
        return <Login onPageChange={handlePageChange} />;
      case 'register':
        return <Register onPageChange={handlePageChange} />;
        case 'adminsignin':
          return <AdminSign onPageChange={handlePageChange} />;
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
