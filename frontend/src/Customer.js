import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
// import './cssFolder/Customer.css';

export default function Customer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="body">
      {/* <button onClick={goToHome}>Home</button> */}
      <div className="main">
        <h2>Customer Data</h2>
        <div className="datas">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.amount}</td>
                  <td className="btns">
                    <Link to={`/read/${item.id}`}>📖</Link>
                    <button className="edit-btn">📝</button>
                    <button className="delete-btn">❌</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
