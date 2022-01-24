import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Logo from "../Images/logo.png";

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
      .get(`http://localhost:7800/api/profile/${username}`)
      .then((data) => {
        setEmail(data.data[0].email);
        setName(data.data[0].name);
        setDob(data.data[0].dob.slice(0, 10).split("-").reverse().join("-"));
        setTotal_Score(data.data[0].total_score);
        setTeam(data.data[0].team);
      })
  }, [username])

  return (
    <div style={{height:"100vh"}}>
      <div id="bg">
          <Navbar />
          <div className="container ms-auto d-flex justify-content-center align-items-center mt-5 pt-2">
          <div className="card align-items-center bg-dark" style={{width: "40vw", minWidth:"350px" ,borderRadius: "3%"}}>

            <img src={Logo} className="card-img-top w-25 mt-2" />

            <div class="card-body text-center row my-4 mb-2" style={{fontSize: "1.4em"}}>
              <b className="col-6 my-2" style={{color: "rgba(226,29,45,255)"}}>Name</b>
              <b className="col-6 my-2" style={{color: "rgba(226,29,45,255)"}}>{name}</b>
              <b className="col-6 my-2 " style={{color: "rgba(238,141,35,255)"}}>Username</b>
              <b className="col-6 my-2" style={{color: "rgba(238,141,35,255)"}}>{username}</b>
              <b className="col-6 my-2" style={{color: "rgba(40,162,75,255)"}}>Email</b>
              <b className="col-6 my-2" style={{color: "rgba(40,162,75,255)"}}> {email}</b>
              <b className="col-6 my-2" style={{color: "rgba(32,154,208,255)"}}>Date of Birth</b>
              <b className="col-6 my-2" style={{color: "rgba(32,154,208,255)"}}>{dob}</b>
              <b className="col-6 my-2" style={{color: "rgba(19,92,167,255)"}}>Favorite team</b>
              <b className="col-6 my-2" style={{color: "rgba(19,92,167,255)"}}>{team}</b>
              <b className="col-6 my-2" style={{color: "rgba(253,220,25,255)"}}>Score</b>
              <b className="col-6 my-2" style={{color: "rgba(253,220,25,255)"}}>{total_score}</b>
              
              

              
              

              
              

              
              
              
              
            </div>
          
          </div>
          </div>
        </div>
      </div>
  )
}