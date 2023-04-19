
import React,{useState} from "react";
export const Register = (props) => {

    //-------------------------------------------------------
    const [user,setUser] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: "",
      });
    
      let name,value;
    
      const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;
    
        setUser({...user,[name]:value})
      }
    
      const handleSubmit = async (e) => {
        console.log("submit has pressed");
        e.preventDefault();
        
    
        const { name, email, password, conpassword } = user;
        const res = await fetch("/api/v1/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name,
            email,
            password,
            // conpassword,
          }),
        });
        const data = await res.json();
        console.log(data)
        if (!data) {
          window.alert("Invalid registration");
          window.alert(res.statusText)
          console.log("Invalid registration");
        } else {
          console.log(data)
          window.alert("Registration successful");
          console.log("Registration successful");
        }
        // return axios.post("http://localhost:4000/api/v1/register")
      };
    //-------------------------------------------------------
    // const [fname,setfname] =useState('');
   
    // const [email,setEmail] =useState('');
    // const [password,setpassword] =useState('');
    // const [cpassword,setcpassword] =useState('');
    // const handleSubmit =(e) => {
    //     e.preventDefault();
    //     console.log(email);
    // }
    return (
        <div className="auth-form-container">
        <form className="Register-form" onSubmit={handleSubmit}>
           <label htmlfor="name"> Name</label>
           <input value={user.name} onChange={handleInputs} type ="name" placeholder="name" id="name" name="name"  />
         
           <label htmlfor="email">Email</label>
           <input value={user.email} onChange={handleInputs} type ="email" placeholder="your username" id="email" name="email"  />
           <label htmlfor="password">Password</label>
           <input value={user.password} onChange={handleInputs} type ="password" placeholder="**********" id="password" name="password"  />
           <label htmlfor="cpassword">Confirm Password</label>
           <input value={user.cpassword} onChange={handleInputs} type ="cpassword" placeholder="**********" id="cpassword" name="cpassword"  />
           <button type="submit">Sign In</button>
           </form> 
           <button className="link-btn" onClick={() =>props.onFormSwitch("login")}>Already have an Account? Sign in</button>
    </div> 
    )
} 
export default Register;