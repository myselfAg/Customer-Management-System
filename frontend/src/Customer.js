import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import dp from "./images/b.jpg";

export default function Customer() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const addCustomer = () => {
    navigate("/create");
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

  const toTitleCase = (str) => {
    if (!str) return "";
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

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
          <h1 className="text-lg font-semibold">Customer </h1>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full overflow-hidden">
              <img src={dp} alt="Profile Pic" className="object-cover" />
            </div>
          </div>
        </div>

        <div className="h-14 w-11/12 flex justify-between items-center">
          <h2 className="text-2xl font-bold ml-4">Customer</h2>
          <button
            className="addCus h-8 w-24 rounded-lg bg-cyan-600 font-semibold hover:bg-gradient-to-r from-transparent via-white/30 to-cyan-100 text-white mr-4 transition duration-500 ease-in-out shadow-[0_2px_7px_rgba(0,0,0,0.40)] hover:shadow-lg"
            onClick={addCustomer}
          >
            Add
          </button>
        </div>
        <div className="searchSec h-24 w-11/12 bg-white shadow-[0_4px_10px_rgba(0,0,0,0.15)] rounded-2xl mt-4 flex items-center ">
          <div className="w-1/2 flex flex-col gap-2 ml-6">
            <p className="font-bold">What Are You Looking For?</p>
            <input
              type="text"
              placeholder="Search"
              className="h-8 w-3/4 bg-zinc-100 rounded-md pl-4"
            />
          </div>
        </div>
        <div className="bg-white flex justify-center h-[61vh] overflow-auto no-scrollbar rounded-3xl mt-8 w-11/12 shadow-[2px_2px_20px_rgba(0,0,0,0.15)]">
          <div className="">
            <table className="table-fixed text-center w-full">
              <thead className="">
                <tr className="border-b-2 h-16 bg-slate-100">
                  <th>Serial No.</th>
                  <th>Product Id</th>
                  <th>Name</th>
                  <th>Amount</th>
                  <th>Country</th>
                  <th>City</th>
                  <th>Contact</th>
                  <th>Date</th>
                  <th>View Customer</th>
                </tr>
              </thead>

              <tbody className="">
                {data.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b-2 h-14 hover:shadow-[0_0_8px_rgba(0,0,0,0.15)]"
                  >
                    <td>{item.sl}</td>
                    <td>{item.productid}</td>
                    <td>{toTitleCase(item.name)}</td>
                    <td>{item.amount}</td>
                    <td>{toTitleCase(item.country)}</td>
                    <td>{toTitleCase(item.city)}</td>
                    <td>{item.contact}</td>
                    <td>{item.date.split("T")[0]}</td>
                    <td className="btns">
                      <Link
                        to={`/read/${item.sl}`}
                        className=" px-4 py-1 rounded-lg shadow-md transition duration-500 ease-in-out hover:bg-cyan-600 hover:text-white "
                      >
                        View →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
