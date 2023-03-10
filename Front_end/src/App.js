
import React,{useState} from "react";
import logo from './logo.svg';
import reactLogo from "./image 25.png";
import './App.css';
import {Login} from "./Login";
import {Register} from "./Register";

function App() {
  const[currentForm,setCurrentForm]=useState('Login'); 

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
           <img src={reactLogo} alt="react logo" width="650" height="550"/>

    </div> </div> 
    </div>
  );
}

export default App;
