import React from "react";
import MatchDayData from "../src/context/MatchDayContext";
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
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <MatchDayData>
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
                <p>404! URL not found!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </MatchDayData>
  );
}