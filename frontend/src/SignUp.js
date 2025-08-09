import React from "react";
import './cssFolder/Login.css';
import { useState } from "react";
import axios from "axios";
import './cssFolder/SignUp.css';

function Login() {
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
    <>
      <div className="main-login" onSubmit={handleSubmit}>
        <form className="login">
          <h2>Sign Up</h2>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Username"
              className="login-info"
              name="username"
              onChange={(e) =>
                setValues({ ...values, name: e.target.value })
              }
            />
          </div>

          <div className="mb-2">
            <input
              type="password"
              placeholder="Password"
              className="login-info"
              name="password"
              onChange={(e) =>
                setValues({ ...values, name: e.target.value })
              }
            />
          </div>

          <button type="submit">Signup</button>
        </form>
      </div>
    </>
  );
}

export default Login;
