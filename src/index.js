import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Rules from "./Pages/Rules";
import Profile from "./Pages/Profile";
import Predictions from "./Pages/Predictions";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<App />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="addUser" element={<AddDonor />} /> */}
      <Route path="/" element={<Home />} exact />
      <Route path="profile" element={<Profile />} exact />
      <Route path="login" element={<Login />} exact />
      <Route path="rules" element={<Rules />} exact />
      <Route path="predictions" element={<Predictions />} exact />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
