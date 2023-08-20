<<<<<<< HEAD
import React from 'react';
import './Table2.css'; // Import your CSS for styling

const Table1 = () => {
  return (
    <div className="table-page">
      <main className="main-content">
        <div className="table-container">
          <h1>Receivers Details</h1>
          <table className="donors-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Date</th>
                <th>Blood Group </th>
                <th>Units</th>
              </tr>
            </thead>
            <tbody>
              {/* Populate the table rows with data from MongoDB */}
              <tr>
                <td>John Doe</td>
                <td>30</td>
                <td>2023-08-19</td>
                <td>2</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Table1;
=======
import React from 'react';
import './Table2.css'; // Import your CSS for styling

const Table1 = () => {
  return (
    <div className="table-page">
      <main className="main-content">
        <div className="table-container">
          <h1>Receivers Details</h1>
          <table className="donors-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Date</th>
                <th>Blood Group </th>
                <th>Units</th>
              </tr>
            </thead>
            <tbody>
              {/* Populate the table rows with data from MongoDB */}
              <tr>
                <td>John Doe</td>
                <td>30</td>
                <td>2023-08-19</td>
                <td>2</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Table1;
>>>>>>> 7d64e03c4859e197a114e9eb709868968aeee46e
