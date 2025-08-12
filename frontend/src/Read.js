import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Read = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8081/read/" + id)
      .then((res) => {
        console.log(res);
        setCustomer(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const goToUpdate = () => {
    navigate(`/update/${customer[0].id}`);
  };
  return (
    <div>
      {customer.length > 0 ? (
        <>
          <h2>{customer[0].id}</h2>
          <h2>{customer[0].name}</h2>
          <h2>{customer[0].amount}</h2>

          <button className="edit-btn" onClick={goToUpdate}>
            📝
          </button>
          <button className="delete-btn">❌</button>
        </>
      ) : (
        <p>Loading..</p>
      )}
    </div>
  );
};

export default Read;
