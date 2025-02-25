import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob,setDob]=useState("")
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/getOneUser/${id}`)
      .then((result) => {
        console.log(result.data);
        setEmail(result.data.email);
        setName(result.data.name);
        setDob(result.data.dob)
        setPhone(result.data.phone);
        setPassword(result.data.password);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  

  const updateHandle = (id) => {
    axios
      .put(`http://localhost:8080/api/updateUser/${id}`,{email,name,dob,phone,password})
      .then(result => {
        console.log("User updated successfully!"+result.data);
        navigate("/home");
      })
      .catch((error) => console.log(error));
  };
  

  return (
    <div className="container my-3 w-50 border border-success">
      <h2 className="mb-2 text-center">update User!</h2>
      <div>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Date of Birth</label>
          <input
            type="text"
            className="form-control"
            name="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            placeholder="yy-mm-dd"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={()=>updateHandle(id)} className="btn btn-success m-2">
          Update User
        </button>
      </div>
    </div>
  );
}

export default UpdateUser;
