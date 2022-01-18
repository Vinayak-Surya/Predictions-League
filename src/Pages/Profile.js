import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import BG from "../Images/pre.jpg";

export default function Profile() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [total_score, setTotal_Score] = useState('');  
  const [team, setTeam] = useState('');

  useEffect(() => {
    setUsername(sessionStorage.getItem("userName"));
  })

  useEffect(() => {
    axios
      .get(`http://localhost:7800/api/profile/sk`)
      .then((data) => {
        setEmail(data.data[0].email);
        setName(data.data[0].name);
        setDob(data.data[0].dob);
        setTotal_Score(data.data[0].total_score);
        setTeam(data.data[0].team);
      })
  }, [username])

  return (
    <div>
      <div id="bg">
        <div style={{ height: "100vh" }}>
          <Navbar />
          <div style={{color: "white"}}>
            <div>{name}</div>
            <div>{username}</div>
            <div>{email}</div>
            <div>{dob}</div>
            <div>{team}</div>
            <div>{total_score}</div>
          </div>
        </div>
      </div>
    </div>
  )
}