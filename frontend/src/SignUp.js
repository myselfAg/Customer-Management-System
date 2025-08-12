import React from "react";
// import './cssFolder/Login.css';
import { useState } from "react";
import axios from "axios";
import bg from "./images/c.jpg";

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
      <div
        className="h-screen w-screen flex justify-center items-center"
        onSubmit={handleSubmit}
      >
        <div className="relative h-screen w-2/3 overflow-hidden">
          <img
            src={bg}
            alt="bg"
            className="h-full w-full object-cover object-left"
          />
          <div className="absolute inset-y-0 right-0 w-2 bg-gradient-to-l from-white to-transparent"></div>
        </div>
        <form className="relative bg-white h-screen w-1/2 flex flex-col justify-center items-center gap-5 ">
          <h2 className="text-5xl font-bold">Sign Up</h2>
          <div className="flex flex-col gap-5 mb-5 mt-5">
            <input
              type="text"
              placeholder="Username"
              className="h-10 w-96 pl-2 border border-black text-sm"
              name="username"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />

            <input
              type="password"
              placeholder="Password"
              className="h-10 w-96 pl-2 border border-black text-sm"
              name="password"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="bg-orange-400 text-white h-10 w-96 text-sm"
          >
            Signup
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
