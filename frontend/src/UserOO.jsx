/*
import React, { Component } from 'react';
import './App.css';
import backgroundImage from './image 26.png';

class UserOO extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      bloodGroup: '',
      age: '',
      phone: '',
      lod: '', 
      weight:'', 
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
      
      <div className="UserOO-container">
        <div className="UserOO-form-container">
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
                  <label htmlFor="age" className="input-label-alt">Age</label>
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
                    name="age"
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
                  <label htmlFor="lod" className="input-label-alt">Last Donated Date</label>
                  <label htmlFor="weight" className="input-label-alt">Weight</label>
                </div>
                <div className="label-pair-container">
                  <input
                    type="text"
                    name="lod"
                    value={this.state.reason}
                    onChange={this.handleInputChange}
                    className="input-field-alt"
                  />
                  <input
                    type="text"
                    name="weight"
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
</div>
);
}

export default UserOO;*/

import React, { Component } from 'react';
import './App.css';
import backgroundImage from './image 26.png';

class UserOO extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      bloodGroup: '',
      age: '',
      phone: '',
      lod: '', 
      weight:'', 
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
        <h1 className="heading1">Hi!!! Register for Donation</h1>

        <div className="UserOO-container">
          <div className="UserOO-form-container">
            <form onSubmit={this.handleSubmit}>
              <div className="form-row">
                <div className="form-column">
                  <div className="label-pair-container">
                    <label htmlFor="firstName" className="input-label-alt">First Name</label>
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
                    <label htmlFor="email" className="input-label-alt">Email</label>
                    <label htmlFor="phone" className="input-label-alt">Phone</label>
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
                    <label htmlFor="age" className="input-label-alt">Age</label>
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
                      name="age"
                      value={this.state.age}
                      onChange={this.handleInputChange}
                      className="input-field-alt"
                    />
                  </div>
                </div>
             
                <div className="form-column">
                  <div className="label-pair-container">
                    <label htmlFor="lod" className="input-label-alt">Last Date of Donation</label>
                    <label htmlFor="weight" className="input-label-alt">Weight</label>
                  </div>
                  <div className="label-pair-container">
                    <input
                      type="date"
                      name="lod"
                      value={this.state.lod}
                      onChange={this.handleInputChange}
                      className="input-field-alt"
                    />
                    <input
                      type="number"
                      name="weight"
                      value={this.state.weight}
                      onChange={this.handleInputChange}
                      className="input-field-alt"
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="submit-button">Register</button>
            </form>
          </div>
          
        </div>
      </div>
    );
  }
}

export default UserOO;
