import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import MatchDayData from "./MatchDayContext";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Rules from "./Pages/Rules";
import Admin from "./Pages/Admin";
import Profile from "./Pages/Profile";
import Predictions from "./Pages/Predictions";
import SignUp from "./Pages/SignUp";
import Leaderboard from "./Pages/Leaderboard";
import GameweekTotal from "./Pages/GameweekTotal";
import UserPredictions from "./Pages/UserPredictions";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  // <MatchDayData>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="profile" element={<Profile />} exact />
        <Route path="login" element={<Login />} exact />
        <Route path="rules" element={<Rules />} exact />
        <Route path="predictions" element={<Predictions />} exact />
        <Route path="signup" element={<SignUp />} exact />
        <Route path="admin" element={<Admin />} exact />
        <Route path="leaderboard" element={<Leaderboard />} exact />
        <Route path="gameweektotal" element={<GameweekTotal />} exact />
        <Route path="userpredictions" element={<UserPredictions />} exact />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  // </MatchDayData>,
  ,document.getElementById("root")
);

reportWebVitals();
