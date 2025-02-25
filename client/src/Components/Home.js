import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Home() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/getAllUsers")
      .then((result) => {
        console.log(result.data);
        setUser(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/api/deleteUser/${id}`)
      .then((result) => {
        console.log("User deleted successfully:", result.data);
        setUser((prevUsers) => prevUsers.filter((user) => user._id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //
  return (
    <div className="container my-3">
      <h2 className="mb-2">
        welcome to home page!{" "}
        <span>
          <NavLink to="/" className="btn btn-primary">
            add uesr to home
          </NavLink>
        </span>{" "}
      </h2>

      <table border={1} className="table">
        <thead className="thead">
          <tr>
            <td>s_no.</td>
            <td>name</td>
            <td>email</td>
            <td>phone</td>
            <td>password</td>
          </tr>
        </thead>
        <tbody className="tbody">
          {user.map((e, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.phone}</td>
                <td>{e.password}</td>

                <NavLink to={`/update/${e._id}`} className="btn btn-success">
                  Edit
                </NavLink>

                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(e._id)}
                >
                  Delete
                </button>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <div className="d-flex p-2">
        <NavLink to="/update" className="btn btn-success">edit</NavLink>
        <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>delete</button>
      </div> */}
    </div>
  );
}
export default Home;
