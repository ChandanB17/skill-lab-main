import React, { useState } from "react";
import Axios from "axios";

function App() {
  const [fdata, setFdata] = useState({
    Name: "",
    email: "",
    Phone: "",
    Age:""
  });
  const [msg, setMsg] = useState();

  const changeHandler = (e) => {
    let name1 = e.target.name;
    let val = e.target.value;
    setFdata({ ...fdata, [name1]: val });
  };


  const submitHandler = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:4000/ins", { fdata }).then((res) => {
      let ack = res.data;
      if (ack === "success") {
        setMsg("Data inserted successfully");
        console.log(msg);
        alert("Data inserted successfully");
      } else {
        setMsg("Data not inserted");
        console.log(msg);
        alert("Data not inserted");
      }
    });
  };

  return (
    <div className="form">
  
      <form onSubmit={submitHandler}>
        <div className="form-items">

        <label>Name:</label>
        <input
        className="inputfor"
        placeholder="Type here"
          type="text"
          name="Name"
          value={fdata.Name}
          onChange={changeHandler}
          />
          </div>
<div className="form-items">
  
  <label>Email:</label>
  <input
  className="inputfor"
  placeholder="Type here"
    type="email"
    name="email"
    value={fdata.email}
    onChange={changeHandler}
    />
    </div>
<div className="form-items">

        <label>Phone number:</label>
        <input
        className="inputfor"
        placeholder="Type here"
          type="Phone"
          name="Phone"
          value={fdata.Phone}
          onChange={changeHandler}
          />
          </div>
        <button className="formbut" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;