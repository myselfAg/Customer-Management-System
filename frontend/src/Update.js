import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState({
    id: "",
    name: "",
    amount: ""
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .put(`http://localhost:8081/update/${id}`, customer)
    .then((res) => {
      console.log(res);
      navigate("/customer");
    })
    .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:8081/read/" + id)
      .then((res) => {
        console.log(res);
        setCustomer(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="body">
      <div className="sub-main">
        <form onSubmit={handleSubmit}>
          <h2>Update Customer</h2>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Enter Id"
              className="form-control"
              name="id"
              readOnly={true}
              value={customer.id}
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              name="name"
              value={customer.name}
              onChange={(e) =>
                setCustomer({ ...customer, name: e.target.value })
              }
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Enter amount"
              className="form-control"
              name="amount"
              value={customer.amount}
              onChange={(e) =>
                setCustomer({ ...customer, amount: e.target.value })
              }
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
