import React, { useState } from "react";
import Axios from "axios";
function App() {
    const [fdata, setFdata] = useState({
      Name: "",
      email: "",
      Phone: "",
      date:"",
      gender:"",
      country:"",
      state:"",
      adress:"",
      zip:"",
      checkbox:"",
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
            type="text"
            name="Name"
            value="Type here"
            onChange={changeHandler}
            />
            </div>
  <div className="form-items">
  
          <label>Email:</label>
          <input
          className="inputfor"
            type="email"
            name="Email"
            value="Type here"
            onChange={changeHandler}
            />
            </div>
  <div className="form-items">
  
          <label>Phone number:</label>
          <input
          className="inputfor"
            type="Phone"
            name="Phone"
            value="Type here"
            onChange={changeHandler}
            />
            </div>
  <div className="form-items">
  
  <label>Date of Birth:</label>
          <input
          className="inputfor"
            type="date"
            name="date"
            value="Type here"
            onChange={changeHandler}
            />
  
            </div>
  <div className="form-items">
  
  <label></label>
          {/* <input
          className="inputfor"
            onChange={changeHandler}
            /> */}
            <div>
                Gender:
            <input type="radio" value="Male" name="gender" />   Male  
        <input type="radio" value="Female" name="gender" />   Female  
        <input type="radio" value="Other" name="gender" />   Other  
            </div>
          
           </div>
          <button className="formbut" type="submit">Submit</button>
        </form>
      </div>
    );
  }
  
  export default App;
