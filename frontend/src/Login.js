import React from "react";
// import "./cssFolder/Login.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import bg from "./images/a.jpg";
function Login() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/login", values)
      .then((res) => {
        if (res.data.success) {
          console.log("Login successful:", res.data.user);
          navigate("/customer");
        } else {
          console.log(res.data.message);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div
        className="main-login h-screen w-screen flex  items-center"
        onSubmit={handleSubmit}
      >
        <div className="relative h-screen w-2/3 overflow-hidden">
          <img
            src={bg}
            alt="bg"
            className="h-full w-full object-cover object-left "
          />
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-transparent via-white/60 to-white"></div>
        </div>
        <form className="relative bg-white h-screen w-1/2 flex flex-col justify-center items-center gap-5 ">
          <h2 className="text-5xl font-bold animate-pulse">Login</h2>
          <div className="">
            <div className="flex flex-col gap-5 mb-5 mt-5">
              <input
                type="text"
                placeholder="Username"
                className="login-info h-10 w-96 pl-2 border border-black text-sm"
                id="user"
                name="username"
                onChange={(e) =>
                  setValues({ ...values, username: e.target.value })
                }
              />

              <input
                type="password"
                placeholder="Password"
                className="h-10 w-96 pl-2 border border-black text-sm"
                id="pass"
                name="password"
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
              />
            </div>
            <div className="">
              <p>
                Don't have an account?{" "}
                <Link to={"/signup"} className="text-cyan-700 font-bold">
                  Sign Up
                </Link>
              </p>

              <button
                type="submit"
                className="bg-cyan-700 text-white h-10 w-96 text-sm mt-2"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
