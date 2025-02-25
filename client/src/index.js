import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserRegister from "./Components/UserRegister.js";
import Home from "./Components/Home.js";
import UpdateUser from "./Components/UpdateUser.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserRegister />} />
      <Route path="/home" element={<Home />} />
      <Route path="/update/:id" element={<UpdateUser />} />
    </Routes>
  </BrowserRouter>
);
