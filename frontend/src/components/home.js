import React from "react";
import { useState } from "react";
import Axios from "axios";

function Home() {
  const [fdata, setFdata] = useState({
    name: "",
    content: "",
    date: "",
    fee:"",
  });
  const [msg, setMsg] = useState();

  //*************change handler */
  const ChangeHandler = (e) => {
    let name1 = e.target.name;
    let val = e.target.value;
    setFdata({ ...fdata, [name1]: val });
  };

  //*************submit handler */
  const SubmitHandler = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:4000/ins", { fdata }).then((res) => {
      let ack = res.data;
      if (ack === "success") {
        setMsg("Data inserted successful");
        console.log(msg);
        alert("data inserted successfully");
      } else {
        setMsg("Data not inserted ");
        console.log(msg);
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
}}>Enter Task Details</div>

      <form onSubmit={SubmitHandler}>
        <label>Task Name: </label>
        <input
          type="text"
          name="name"
          autoComplete="off"
          value={fdata.name}
          onChange={ChangeHandler}
        />
        <br></br>

        <label>Description: </label>
        <input
          type="text"
          name="content"
          autoComplete="off"
          value={fdata.content}
          onChange={ChangeHandler}
        />
        <br></br>

        <label>Due Date </label>
        <input
          type="date"
          name="date"
          value={fdata.date}
          onChange={ChangeHandler}
        />

        <br></br>

        <label>Time required: </label>
        <input
          type="number"
          name="fee"
          value={fdata.fee}
          onChange={ChangeHandler}
        />
        <br></br>

        <button type="submit">Insert</button>
      </form>
    </>
  );
}

export default Home;