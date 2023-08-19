/*
import React, { Component } from 'react';
import './App.css';
import backgroundImage from './image 26.png';

class UserRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      bloodGroup: '',
      units: '',
      phone: '',
      reason: '', 
      hospital:'', 
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="UserRegister-container">
        <div className="UserRegister-form-container">
          <form onSubmit={this.handleSubmit}>
            <div className="form-row">
              <div className="form-column">
                <div className="label-pair-container">
                  <label htmlFor="firstName" className="input-label-alt">First Name   </label>
                  <label htmlFor="lastName" className="input-label-alt">Last Name</label>
                </div>
                <div className="label-pair-container">
                  <input
                    type="text"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleInputChange}
                    className="input-field-alt"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleInputChange}
                    className="input-field-alt"
                  />
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-column">
                <div className="label-pair-container">
                  <label htmlFor="email" className="input-label-alt">Email           </label>
                  <label htmlFor="phone" className="input-label-alt">Phone           </label>
                </div>
                <div className="label-pair-container">
                  <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    className="input-field-alt"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.handleInputChange}
                    className="input-field-alt"
                  />
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-column">
                <div className="label-pair-container">
                  <label htmlFor="bloodGroup" className="input-label-alt">Blood Group</label>
                  <label htmlFor="units" className="input-label-alt">Units</label>
                </div>
                <div className="label-pair-container">
                  <input
                    type="text"
                    name="bloodGroup"
                    value={this.state.bloodGroup}
                    onChange={this.handleInputChange}
                    className="input-field-alt"
                  />
                  <input
                    type="number"
                    name="units"
                    value={this.state.units}
                    onChange={this.handleInputChange}
                    className="input-field-alt"
                  />
                </div>
              </div>
            </div>
           
          

            <div className="form-row">
              <div className="form-column">
                <div className="label-pair-container">
                  <label htmlFor="reason" className="input-label-alt">Reason</label>
                  <label htmlFor="hospital" className="input-label-alt">Hospital</label>
                </div>
                <div className="label-pair-container">
                  <input
                    type="text"
                    name="reason"
                    value={this.state.reason}
                    onChange={this.handleInputChange}
                    className="input-field-alt"
                  />
                  <input
                    type="text"
                    name="hospital"
                    value={this.state.hospital}
                    onChange={this.handleInputChange}
                    className="input-field-alt"
                  />
                </div>
              </div>
            </div>
           
            <button type="submit" className="button-alt">Register</button>
</form>
</div>
</div>
);
}
}

export default UserRegister;*/
import React, { Component } from 'react';
import './App.css';
import backgroundImage from './image 26.png';

class UserRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      bloodGroup: '',
      units: '',
      phone: '',
      reason: '', 
      hospital:'', 
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="UserRegister-container">
<h1 className="heading1">Hi!!! Register for blood</h1>

        <div className="UserRegister-form-container">
          <form onSubmit={this.handleSubmit}>
            <div className="form-row">
              <div className="form-column">
                <div className="label-pair-container">
                  <label htmlFor="firstName" className="input-label-alt">First Name   </label>
                  <label htmlFor="lastName" className="input-label-alt">Last Name</label>
                </div>
                <div className="label-pair-container">
                  <input
                    type="text"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleInputChange}
                    className="input-field-alt"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleInputChange}
                    className="input-field-alt"
                  />
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-column">
                <div className="label-pair-container">
                  <label htmlFor="email" className="input-label-alt">Email           </label>
                  <label htmlFor="phone" className="input-label-alt">Phone           </label>
                </div>
                <div className="label-pair-container">
                  <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    className="input-field-alt"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.handleInputChange}
                    className="input-field-alt"
                  />
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-column">
                <div className="label-pair-container">
                  <label htmlFor="bloodGroup" className="input-label-alt">Blood Group</label>
                  <label htmlFor="units" className="input-label-alt">Units</label>
                </div>
                <div className="label-pair-container">
                  <input
                    type="text"
                    name="bloodGroup"
                    value={this.state.bloodGroup}
                    onChange={this.handleInputChange}
                    className="input-field-alt"
                  />
                  <input
                    type="number"
                    name="units"
                    value={this.state.units}
                    onChange={this.handleInputChange}
                    className="input-field-alt"
                  />
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-column">
                <div className="label-pair-container">
                  <label htmlFor="reason" className="input-label-alt">Reason</label>
                  <label htmlFor="hospital" className="input-label-alt">Hospital</label>
                </div>
                <div className="label-pair-container">
                  <input
                   type="text"
                   name="reason"
                   value={this.state.reason}
                   onChange={this.handleInputChange}
                   className="input-field-alt"
                 />
                 <input
                   type="text"
                   name="hospital"
                   value={this.state.hospital}
                   onChange={this.handleInputChange}
                   className="input-field-alt"
                 />
               </div>
             </div>
           </div>
          
           <button type="submit" className="button-alt">Register</button>
</form>
</div>
</div>
);
}
}

export default UserRegister;
