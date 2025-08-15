import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dp from "./images/b.jpg";

const Read = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState([]);
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };
  const goToEmp = () => {
    navigate("/customer");
  };
  const goToLogin = () => {
    navigate("/login");
  };
  useEffect(() => {
    axios
      .get("http://localhost:8081/read/" + id)
      .then((res) => {
        console.log(res);
        setCustomer(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const deleteCustomer = () => {
    axios
      .delete(`http://localhost:8081/read/${id}`)
      .then((res) => {
        console.log(res);
        alert("Customer Deleted Successfully");
        navigate("/customer");
      })
      .catch((err) => console.log(err));
  };

  const goToUpdate = () => {
    navigate(`/update/${customer[0].id}`);
  };

  return (
    <>
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
                Employee
              </li>
              <li className="mb-8 py-1 pl-4 rounded-lg transition duration-300 ease-in-out hover:text-slate-500 hover:opacity-30 hover:bg-white bg-gradient-to-l from-transparent via-white/30 cursor-pointer">
                Works
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
            <h1 className="text-lg font-semibold">Dashboard &gt; Employee &gt; View Employee</h1>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full overflow-hidden">
                <img src={dp} alt="Profile Pic" className="object-cover" />
              </div>
              <p>agneesh@gmail.com</p>
            </div>
          </div>
          <div className="h-14 w-11/12 flex justify-between items-center">
            <h2 className="text-2xl font-bold ml-4">Employee Details</h2>
            <button className="addCus h-8 w-24 rounded-lg bg-cyan-600 font-semibold hover:bg-gradient-to-r from-transparent via-white/30 to-cyan-100 text-white mr-4 transition duration-500 ease-in-out shadow-[0_2px_7px_rgba(0,0,0,0.40)] hover:shadow-lg">
              Save
            </button>
          </div>
          {/* <div className="searchSec h-24 w-11/12 bg-white shadow-[0_4px_10px_rgba(0,0,0,0.15)] rounded-2xl mt-4 flex items-center ">
            <div className="w-1/2 flex flex-col gap-2 ml-6">
              <p className="font-bold">What Are You Looking For?</p>
              <input
                type="text"
                placeholder="Search"
                className="h-8 w-3/4 bg-zinc-100 rounded-md pl-4"
              />
            </div>
          </div> */}
          <div className="bg-white flex items-center pl-8 h-[78vh] overflow-auto no-scrollbar rounded-3xl mt-4 w-11/12 shadow-[2px_2px_20px_rgba(0,0,0,0.15)]">
            <div className="h-[65vh] w-1/3 shadow-[0px_0px_10px_rgba(0,0,0,0.15)_inset] rounded-xl overflow-hidden">
              {customer.length > 0 ? (
                <div className="">
                  <table className="table-fixed w-full">
                    <tr className="border-b-2 h-14 hover:shadow-[0_0_8px_rgba(0,0,0,0.15)]">
                      <td>Id</td>
                      <td>{customer[0].id}</td>
                    </tr>
                    <tr className="border-b-2 h-14 hover:shadow-[0_0_8px_rgba(0,0,0,0.15)]">
                      <td>Name</td>
                      <td>{customer[0].name}</td>
                    </tr>
                    <tr className="border-b-2 h-14 hover:shadow-[0_0_8px_rgba(0,0,0,0.15)]">
                      <td>Amount</td>
                      <td>{customer[0].amount}</td>
                    </tr>
                  </table>

                  <button className="edit-btn" onClick={goToUpdate}>
                    📝
                  </button>
                  <button className="delete-btn" onClick={deleteCustomer}>
                    ❌
                  </button>
                </div>
              ) : (
                <p>Loading..</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Read;
