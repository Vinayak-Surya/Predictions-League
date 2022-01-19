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
    <div>
      <div id="bg">
        <div style={{ height: "100vh" }}>
          <Navbar />
          <div className="container ms-auto d-flex justify-content-center align-items-center mt-5 pt-2">
          <div className="card align-items-center bg-dark" style={{width: "40vw", borderRadius: "3%"}}>

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

            {/* <div className=" w-100" >
            <div className="d-flex justify-content-center align-items-center flex-column">
                  <div className="text-center w-25 my-5">
                    <img src={Logo} alt="" className="w-50 border-radius: 50%;" />
                  </div>
            <table class="table table-dark text-center" style={{width: "50vw"}}>
              <tbody>
                <tr className="bg-brimary">
                  <th class="bg-danger col-6" scope="row">Name</th>
                  <td class="bg-primary col-6">{name}</td>
                </tr>
                <tr><th class="bg-danger col-6" scope="row">Username</th>
                  <td class="bg-primary col-6">{username}</td></tr>
                <tr class="bg-success">
                  <th class="bg-danger col-6" scope="row">Email</th>
                  <td class="bg-primary col-6">{email}</td>
                </tr>
                <tr><th class="bg-danger col-6" scope="row">DOB</th>
                  <td class="bg-primary col-6">{dob}</td></tr>
                
                <tr><th class="bg-danger col-6" scope="row">Favorite team</th>
                  <td class="bg-primary col-6 ">{team}</td></tr>
                  <tr><th  class="bg-danger col-6" scope="row">Score</th>
                  <td class="bg-primary col-6">{total_score}</td>
                </tr>
                
                
                
                
                  
                  

              </tbody>
            </table>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}