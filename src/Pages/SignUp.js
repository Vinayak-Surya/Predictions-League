import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Logo from "../Images/logo.png";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {

  const navigate = useNavigate();
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
    postData()
      .then((data) => {
        console.log(data);
        if (data.message) {
          toast.error(data.message, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
          });
        }
        else {
          toast.success("User created! Redirecting to login....", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
          });
          setInterval(() => {
            navigate('/login');
          }, 2500);
        }
      })
  }

  return (
    <div id="d1">
      <div id="bg">
        <div/*style={{ backdropFilter: "blur(3px)" }}*/ id="d1">
          <Navbar />
          <section className="mt-2 mx-auto text-light">
            <div className="container" id="form1">
              <ToastContainer />
              <form>
                <div>
                  <div className="text-center wt-5">
                    <img src={Logo} alt="" className="w-25 border-radius: 50%;" />
                  </div>
                  <div className="d-md-flex flex-row justify-content-center my-3">
                    <div className="mx-2">
                      <div class="form-group">
                        <label for="name" className="form-label mx-2">Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control px-2" id="name" placeholder="Name" required />
                      </div>
                      <div class="form-group">
                        <label for="email" className="form-label mx-2">Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control px-2" id="email" placeholder="Email" required />
                      </div>
                      <div class="form-group">
                        <label for="dob" className="form-label mx-2">Date Of Birth</label>
                        <input type="date" value={dob} onChange={(e) => setDOB(e.target.value)} className="form-control px-2" id="dob" placeholder="DOB" required />
                      </div>
                    </div>
                    <div className="mx-2">
                      <div class="form-group">
                        <label for="un" className="form-label mx-2">Username</label>
                        <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} className="form-control" id="un" placeholder="Username" required />
                      </div>
                      <div class="form-group">
                        <label for="pw" className="form-label mx-2">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="pw" placeholder="Password" required />
                      </div>
                      <div class="form-group">
                        <label for="ft" className="form-label mx-2">Favourite Team</label>
                        <select value={team} onmousedown="if(this.options.length>4){this.size=4;}" onChange={(e) => setTeam(e.target.value)} class="form-control" id="ft" placeholder="Team" required>

                          <option value="" disabled selected id="ft_placeholder">Favourite Team</option>
                          <option>I dont support any team</option>
                          <option>Alavés</option>
                          <option>Athletic Bilbao</option>
                          <option>Atlético Madrid</option>
                          <option>Barcelona</option>
                          <option>Cádiz</option>
                          <option>Celta Vigo</option>
                          <option>Elche</option>
                          <option>Espanyol</option>
                          <option>Getafe</option>
                          <option>Granada</option>
                          <option>Levante</option>
                          <option>Mallorca</option>
                          <option>Osasuna</option>
                          <option>Rayo Vallecano</option>
                          <option>Real Betis</option>
                          <option>Real Madrid</option>
                          <option>Real Sociedad</option>
                          <option>Sevilla</option>
                          <option>Valencia</option>
                          <option>Villarreal</option>
                        </select>
                      </div>

                    </div>
                  </div>

                  <div className="text-center my-3">
                    <button type="submit" onClick={handleClick} className="btn btn-primary w-75">Sign up</button>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}