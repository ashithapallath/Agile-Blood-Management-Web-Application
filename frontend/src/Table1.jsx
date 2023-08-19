import React from 'react';
import './Table1.css'; // Import your CSS for styling

const Table1 = () => {
  return (
    <div className="table-page">
      <main className="main-content">
        <div className="table-container">
          <h1>Donor Table</h1>
          <table className="donors-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Date</th>
                <th>Blood Group </th>
                <th>Weight</th>
                <th>HB level</th>

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
