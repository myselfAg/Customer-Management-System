import React, { useState } from "react";
import axios from "axios";
import './cssFolder/Create.css';
function Create() {
  const [values, setValues] = useState({
    name: "",
    amount: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/customer", values)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="body">
      <div className="sub-main">
        <form onSubmit={handleSubmit}>
          <h2>Add Customer</h2>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              name="name"
              onChange={(e) =>
                setValues({ ...values, name: e.target.value })
              }
            />
          </div>

          <div className="mb-2">
            <input
              type="text"
              placeholder="Enter Amount"
              className="form-control"
              name="amount"
              onChange={(e) => setValues({ ...values, amount: e.target.value })}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
