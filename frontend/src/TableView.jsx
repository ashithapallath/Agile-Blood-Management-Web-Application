import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TableView() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://your-api-url-here.com/data')
      .then(response => setData(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.column1}</td>
            <td>{item.column2}</td>
            <td>{item.column3}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableView;
