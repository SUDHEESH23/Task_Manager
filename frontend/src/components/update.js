import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useState } from "react";
import Axios from "axios";


function Update() {
  const [fdata, setFdata] = useState({
    taskname: "",
    description: "",
    duedate: "",
    timerequired:"",
  });

  const params = useParams(); //get id from url
  let id = params.id;

  //*****fetch data  */
  useEffect(() => {
    Axios.post("http://localhost:4000/get", { id: id }).then((res) => {
      let data = res.data;
      console.log(data);
      setFdata(...data);
    });
  }, [id]);

  //*************change handler */
  const ChangeHandler = (e) => {
    let name1 = e.target.name;
    let val = e.target.value;
    setFdata({ ...fdata, [name1]: val });
  };

  //*************submit handler */
const UpdateHandler = (e) => {
  
  Axios.post("http://localhost:4000/update", fdata)
    .then((res) => {
      let ack = res.data;
      if (ack === "success") {
        window.alert("updated successfully");
        window.location.reload();
      } else {
        alert("data not inserted");
      }
    });
};



  return (
    <>
      
      <hr></hr>
      <div style={{
        textAlign: "center",
        fontFamily: "Helvetica",
        fontWeight: "bold",
        color: "#fff",
        margin: "10px",
        fontSize : "20px"
}}>
  Update the details
</div>


      <form onSubmit={UpdateHandler}>
        <label>Task Name: </label>
        <input
          type="text"
          name="name"
          placeholder="enter name"
          value={fdata.name}
          onChange={ChangeHandler}
        />
        <br></br>

        <label>Description: </label>
        <input
          type="text"
          name="content"
          value={fdata.content}
          onChange={ChangeHandler}
        />
        <br></br>

        <label>Due Date: </label>
        <input
          type="date"
          name="date"
          value={fdata.date}
          onChange={ChangeHandler}
        />
        <br></br>

        <label>Time Required: </label>
        <input
          type="number"
          name="fee"
          value={fdata.fee}
          onChange={ChangeHandler}
        />
        <br></br>

        <button type="submit">Update</button>
      </form>
    </>
  );
}

export default Update;
