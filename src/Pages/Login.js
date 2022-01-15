import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Logo from "../Images/logo.png";

export default function Login() {
  return (
    <div style={{height: "100vh"}}>
      <div id="bg">
        <div style={{ backdropFilter: "blur(3px)", height: "100vh" }}>
          <Navbar />
          <section className="mt-3 pt-3 mx-auto text-light">
            <div className="container ms-auto" id="form">
              <form>
                <div>
                  <div className="text-center wt-5">
                    <img src={Logo} alt="" className="w-50 border-radius: 50%;" />
                  </div>
                  <label for="un" className="form-label my-2">Username</label>
                  <input type="text" className="form-control" id="un" placeholder="Username" required />
                </div>
                <div>
                  <label for="pw" className="form-label my-2">Password</label>
                  <input type="password" className="form-control" id="pw" placeholder="Password" required />
                </div>
                <div className=" my-4">
                  <button type="submit" className="btn btn-primary w-100">Login</button>
                </div>
              </form>
              <div className="main my-3">
                <div>
                  <div className="d-flex">
                    <hr className="w-25 mx-auto" />
                    <p>or</p>
                    <hr className="w-25 mx-auto" />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Link style={{ textDecoration: 'none', textAlign: 'center' }} className="text-light" to="/signup">Sign Up</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}