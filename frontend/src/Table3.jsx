import React from 'react';
import './Table3.css'; // Import your CSS for styling

const Table3 = () => {
  const requestsData = [
    {
      id: 1,
      name: 'John Doe',
      age: 30,
      units: 2,
      bloodGroup: 'AB+',
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 25,
      units: 1,
      bloodGroup: 'O-',
    },
    {
        id: 3,
        name: 'Ashitha',
        age: 21,
        units: 1,
        bloodGroup: 'A-',
      },
      {
        id: 2,
        name: 'Jane Rose',
        age: 24,
        units: 1,
        bloodGroup: 'O-',
      },
      {
        id: 2,
        name: 'Jane Smith',
        age: 25,
        units: 1,
        bloodGroup: 'O-',
      },
      {
        id: 2,
        name: 'Jane Smith',
        age: 25,
        units: 1,
        bloodGroup: 'O-',
      },
      {
        id: 2,
        name: 'Jane Smith',
        age: 25,
        units: 1,
        bloodGroup: 'O-',
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
    <div className="table3-container">
      {requestsData.map((request) => (
        <div key={request.id} className="request-item">
          <div className="request-content">
            <div className="profile-icon">
              {/* Add profile icon or image */}
            </div>
            <div className="request-details">
              <div className="request-info">
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

export default Table3;
