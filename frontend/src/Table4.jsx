import React from 'react';
import './Table4.css'; // Import your CSS for styling

const Table4 = () => {
  const requestsData = [
    {
      id: 1,
      name: 'John Doe',
      age: 30,
      units: 2,
      bloodGroup: 'AB+',
      icon: 'icon1.png', // Replace with actual icon/image source
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 25,
      units: 1,
      bloodGroup: 'O-',
      icon: 'icon2.png', // Replace with actual icon/image source
    },
    // Add more request data...
  ];

  const handleAccept = (id) => {
    // Handle accept logic here
  };

  const handleReject = (id) => {
    // Handle reject logic here
  };

  return (
    <div className="table4-container">
      {requestsData.map((request) => (
        <div key={request.id} className="request-item">
          <div className="request-content">
            <div className="profile-icon">
              <img src={request.icon} alt=" " />
            </div>
            <div className="request-details">
              <div className="request-info">
                <span className="id">ID: {request.id}</span>
                <span className="name">{request.name}</span>
                <span className="age">{request.age} years</span>
                <span className="units">{request.units} units</span>
                <span className="blood-group">{request.bloodGroup}</span>
              </div>
              <div className="buttons">
                <button className="accept-button" onClick={() => handleAccept(request.id)}>
                  Accept
                </button>
                <button className="reject-button" onClick={() => handleReject(request.id)}>
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Table4;
