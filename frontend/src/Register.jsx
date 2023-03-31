
import React,{useState} from "react";
export const Register = (props) => {
    const [fname,setfname] =useState('');
    const [lname,setlname] =useState('');
    const [phone,setphone] =useState('');
    const [email,setEmail] =useState('');
    const [password,setpassword] =useState('');
    const [cpassword,setcpassword] =useState('');
    const handleSubmit =(e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className="auth-form-container">
        <form className="Register-form" onSubmit={handleSubmit}>
           <label htmlfor="fname">First Name</label>
           <input value={fname} onChange={(e) => setfname(e.target.value)} type ="fname" placeholder="first name" id="fname" name="fname"  />
           <label htmlfor="lname">Last name</label>
           <input value={lname} onChange={(e) => setlname(e.target.value)} type ="lname" placeholder="last name" id="lname" name="lname"  />
           <label htmlfor="phone">Phone</label>
           <input value={phone} onChange={(e) => setphone(e.target.value)} type ="phone" placeholder="enter your phone number" id="phone" name="phone"  />
           <label htmlfor="email">Username</label>
           <input value={email} onChange={(e) => setEmail(e.target.value)} type ="email" placeholder="your username" id="email" name="email"  />
           <label htmlfor="password">Password</label>
           <input value={email} onChange={(e) => setpassword(e.target.value)} type ="password" placeholder="**********" id="password" name="password"  />
           <label htmlfor="cpassword">Confirm Password</label>
           <input value={cpassword} onChange={(e) => setcpassword(e.target.value)} type ="cpassword" placeholder="**********" id="cpassword" name="cpassword"  />
           <button type="submit">Sign In</button>
           </form> 
           <button className="link-btn" onClick={() =>props.onFormSwitch("login")}>Already have an Account? Sign in</button>
    </div> 
    )
} 
export default Register;