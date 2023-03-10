import React,{useState} from "react";

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