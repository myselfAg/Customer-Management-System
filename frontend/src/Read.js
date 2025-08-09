import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Read = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/read/" + id)
      .then((res) => {
        console.log(res);
        setCustomer(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {customer.length > 0 ? (
        <>
          <h2>{customer[0].id}</h2>
          <h2>{customer[0].name}</h2>
          <h2>{customer[0].amount}</h2>

          <button className="edit-btn">Edit</button>
          <button className="delete-btn">Delete</button>
        </>
      ) : (
        <p>Loading..</p>
      )}
    </div>
  );
};

export default Read;
