import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

function UserRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob,setDob]=useState("")
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/createUser",
        {
          name,
          email,
          dob,
          phone,
          password,
        }
      );
      console.log("User created:", response.data);
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container-sm my-3 w-25 border border-primary">
      <h2 className="mb-2">User Register!</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="arun"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
             placeholder="arun@gmail.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dob" className="form-label">
            DOB
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            pattern="[0-9]{10}"
             placeholder="9614343430"
          />
          <small className="text-muted">Enter a 10-digit phone number</small>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
             placeholder="Arun@123"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Register User
        </button>
      </form>
        <button className="btn btn-outline-secondary my-2">
          <NavLink className="text-decoration-none" to="/home">
            Back to home
          </NavLink>
        </button>
    </div>
  );
}

export default UserRegister;
