import React, { useEffect, useState } from "react";
import Axios from "axios";

function Mycourses() {
  const [fdata, setFData] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:4000").then((res) => {
      console.log(res.data);
      setFData(res.data);
    });
  }, []);

  const handleUpdate = (id) => {
    // Navigate to the update page with the specified ID
    window.location.href = `/update/${id}`;
  };

  const handleDelete = (id) => {
    Axios.post("http://localhost:4000/delete", { id }).then((res) => {
      let ack = res.data;
      if (ack === "success") {
        alert("data deleted not succesful");
      } else {
        alert("data deleted succesful");
      }
    });
  };

  return (
    <>
      <hr></hr>
      <div style={{ backgroundColor: "greenyellow", width: "50%" }}></div>

      <div className="container">
        {fdata.map((sdata) => {
          return (
            <div className="card" key={sdata._id}>
              <h2>{sdata.name}</h2>
              <p>{sdata.content}</p>
              <p>{sdata.date}</p>
              <p>{sdata.fee}</p>
              <button
                type="button"
                onClick={() => handleUpdate(sdata._id)}
              >
                Update
              </button>
              <button
                type="button"
                onClick={() => handleDelete(sdata._id)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Mycourses;