import React from "react";
import "./cssFolder/Login.css";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  // const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:8081/login")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
      // res.data[0].username
      // res.data[0].password
  };

  return (
    <>
      <div className="main-login" onSubmit={handleSubmit}>
        <form className="login">
          <h2>Login</h2>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Username"
              className="login-info"
              id="user"
              name="username"
              onChange={(e) => setValues({ ...values, username: e.target.value })}
            />
          </div>

          <div className="mb-2">
            <input
              type="password"
              placeholder="Password"
              className="login-info"
              id="pass"
              name="password"
              onChange={(e) => setValues({ ...values, password: e.target.value })}
            />
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
