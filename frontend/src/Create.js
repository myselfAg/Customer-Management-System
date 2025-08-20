import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import dp from "./images/b.jpg";
function Create() {
  const [values, setValues] = useState({
    name: "",
    productid: "",
    amount: 0,
    country: "",
    city: "",
    contact: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/customer", values)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    navigate("/customer");
  };

  const goToHome = () => {
    navigate("/");
  };
  const goToEmp = () => {
    navigate("/customer");
  };
  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className=" h-screen w-screen bg-zinc-50 flex">
      <div className="nav h-screen w-2/12 bg-cyan-600 flex flex-col pt-2">
        <h1 className="font-bold text-3xl text-slate-200 pl-7">AgServices</h1>
        <div className="w-full pl-6 mt-14">
          <ul className="text-slate-300 w-3/4 font-semibold">
            <li
              onClick={goToHome}
              className="mb-8 py-1 pl-4 rounded-lg transition duration-300 ease-in-out hover:text-slate-500 hover:opacity-30 hover:bg-white bg-gradient-to-l from-transparent via-white/30 cursor-pointer"
            >
              Home
            </li>
            <li
              onClick={goToEmp}
              className="mb-8 py-1 pl-4 rounded-lg transition duration-300 ease-in-out hover:text-slate-500 hover:opacity-30 hover:bg-white bg-gradient-to-l from-transparent via-white/30 cursor-pointer"
            >
              Customer
            </li>
            <li
              onClick={goToLogin}
              className="mb-8 py-1 pl-4 rounded-lg transition duration-300 ease-in-out hover:text-slate-500 hover:opacity-30 hover:bg-white bg-gradient-to-l from-transparent via-white/30 cursor-pointer"
            >
              Logout
            </li>
          </ul>
        </div>
      </div>
      <div className="main w-10/12 flex flex-col items-center">
        <div className="header w-full h-14 bg-white shadow-md flex justify-between items-center px-4">
          <h1 className="text-lg font-semibold">Customer &gt; Add</h1>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full overflow-hidden">
              <img src={dp} alt="Profile Pic" className="object-cover" />
            </div>
          </div>
        </div>

        <div className="h-14 w-11/12 flex justify-between items-center">
          <h2 className="text-2xl font-bold ml-4">Add Customer</h2>
          <button
            onClick={handleSubmit}
            className="addCus h-8 w-24 rounded-lg bg-cyan-600 font-semibold hover:bg-gradient-to-r from-transparent via-white/30 to-cyan-100 text-white mr-4 transition duration-500 ease-in-out shadow-[0_2px_7px_rgba(0,0,0,0.40)] hover:shadow-lg"
          >
            Add
          </button>
        </div>

        <div className="bg-white flex justify-center items-center gap-28 h-[78vh] overflow-auto no-scrollbar rounded-3xl mt-4 w-11/12 shadow-[2px_2px_20px_rgba(0,0,0,0.15)]">
          <form className="h-[78vh] w-full">
            <div className="mb-2 h-[78vh] w-full flex flex-col justify-center items-center gap-4">
              <h2 className="text-2xl font-bold mb-6">Add Customer</h2>
              <input
                type="text"
                placeholder="Enter Name"
                className="form-control border-2 h-14 w-2/3 pl-4"
                name="name"
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Enter Product Id"
                className="form-control border-2 h-14 w-2/3 pl-4"
                name="productid"
                onChange={(e) =>
                  setValues({ ...values, productid: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Enter Amount"
                className="form-control border-2 h-14 w-2/3 pl-4"
                name="amount"
                onChange={(e) =>
                  setValues({ ...values, amount: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Enter Country"
                className="form-control border-2 h-14 w-2/3 pl-4"
                name="country"
                onChange={(e) =>
                  setValues({ ...values, country: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Enter City"
                className="form-control border-2 h-14 w-2/3 pl-4"
                name="city"
                onChange={(e) => setValues({ ...values, city: e.target.value })}
              />

              <input
                type="text"
                placeholder="Enter Contact Number"
                className="form-control border-2 h-14 w-2/3 pl-4"
                name="contact"
                onChange={(e) =>
                  setValues({ ...values, contact: e.target.value })
                }
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
