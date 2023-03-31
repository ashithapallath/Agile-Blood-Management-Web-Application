/*import React,{useState} from "react";


export const Login = (props) => {
    const [email,setEmail] =useState('');
    const [password,setpassword] =useState('');
    const handleSubmit =(e) => {
        e.preventDefault();
        console.log(email);
        

    }
    return (
        <div className="auth-form-container">  
            <form className="Login-form" onSubmit={handleSubmit}>
            
               <label htmlfor="email">Username</label>
               <input value={email} onChange={(e) => setEmail(e.target.value)} type ="email" placeholder="your username" id="email" name="email"  />
               <label htmlfor="password">Password</label>
               <input value={password} onChange={(e) => setpassword(e.target.value)} type ="password" placeholder="*********" id="email" name="email"  />
               <button type="submit">Sign In</button>
               </form> 
              
         <button className="link-btn" onClick={() => props.onFormSwitch("Register")}>Create Account</button>
        
        </div> 
           )
}
export default Login;*/
import React, { useState } from "react";
import { Register } from './Register';
import LoginImage from './image 25.png';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showLogin, setShowLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  const handleCreateAccount = () => {
    setShowLogin(false);
  };

  return (
    <div>
      
      {showLogin ? (
        <div className="auth-form-container">
          <form className="Login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Username</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="your username"
              id="email"
              name="email"
            />
            <label htmlFor="password">Password</label>
            <div style={{ display: "flex" }}>
        
       
      </div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="*********"
              id="password"
              name="password"
            />
           
            <button type="submit">Sign In</button>
          </form>
          <button className="link-btn" onClick={handleCreateAccount}>
            Create Account
          </button>
          
        </div>
      ) : (
        <Register onFormSwitch={() => setShowLogin(true)} />
      )}
       <div style={{ flex: 1 }}>
          <img src={LoginImage} class="my-image" />
        </div>
    </div>
  );
};

export default Login;
