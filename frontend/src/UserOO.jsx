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
      units: '',
      phone: '',
      reason: '',  
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
      <div className="UserOO-container">
        <div className="UserOO-form-container">
          <form onSubmit={this.handleSubmit}>
            <div className="form-column">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleInputChange}
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />

              <label htmlFor="units">Units</label>
              <input
                type="number"
                name="units"
                value={this.state.units}
                onChange={this.handleInputChange}
              />

              <label htmlFor="reason">Reason</label>
              <input
                type="text"
                name="reason"
                value={this.state.reason}
                onChange={this.handleInputChange}
              />
            </div>

            <div className="form-column">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleInputChange}
              />

              <label htmlFor="bloodGroup">Blood Group</label>
              <input
                type="text"
                name="bloodGroup"
                value={this.state.bloodGroup}
                onChange={this.handleInputChange}
              />

              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                name="phone"
                value={this.state.phone}
                onChange={this.handleInputChange}
              />
            </div>

            <button type="submit">UserOO</button>
          </form>
        </div>

        <div className="background-image-container">
          <img src={backgroundImage} alt="background" />
        </div>
      </div>
    );
  }
}

export default UserOO;
