import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Logo from "../Images/logo.png";
import BG from "../Images/pre.jpg";

export default function Login() {


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [dob, setDOB] = useState('')
  const [team, setTeam] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUserName] = useState('')



  async function postData() {
    const response = await fetch("http://localhost:7800/addUser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, dob, password, team, username })
    });
    return response.json()
  }

  const handleClick = (e) => {
    e.preventDefault()
    console.log("Button Clicked")
    postData().then(data => console.log(data))
  }
  return (
    <div style={{ backgroundImage: `url(${BG})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100vh" }}>
      <div style={{ backdropFilter: "blur(3px)", height: "100vh" }}>
        <Navbar />
        <section className="mt-2 mx-auto text-light">
          <div className="container ms-auto" id="form">
            <form>
              <div>
                <div className="text-center wt-5">
                  <img src={Logo} alt="" className="w-50 border-radius: 50%;" />
                </div>
                <div>
                  <label for="name" className="form-label">Name</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="name" placeholder="Name" />
                </div>
                <div>
                  <label for="email" className="form-label">Email</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" placeholder="Email" />
                </div>
                <div>
                  <label for="dob" className="form-label">Date Of Birth</label>
                  <input type="date" value={dob} onChange={(e) => setDOB(e.target.value)} className="form-control" id="email" placeholder="DOB" />
                </div>
                <div>
                  <label for="ft" className="form-label">Favourite Team</label>
                  <input type="text" value={team} onChange={(e) => setTeam(e.target.value)} className="form-control" id="ft" placeholder="Team" />
                </div>
                <div>
                  <label for="un" className="form-label">Username</label>
                  <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} className="form-control" id="un" placeholder="Username" />
                </div>
                <div>
                  <label for="pw" className="form-label">Password</label>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="pw" placeholder="Password" />
                </div>
                <div className=" my-4">
                  <button type="submit" onClick={handleClick} className="btn btn-primary w-100">Sign up</button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}