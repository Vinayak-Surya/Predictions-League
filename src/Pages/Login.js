import React from "react";
import Navbar from "../Components/Navbar";
import Logo from "../Images/logo.png";
import BG from "../Images/pre.jpg";

export default function Login() {
    return (
      <div style={{backgroundImage: `url(${BG})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100vh"}}>
        <div style={{backdropFilter: "blur(3px)", height: "100vh"}}>
          <Navbar />
            <section className="mt-5 pt-5 mx-auto text-light">
              <div className="container ms-auto" id="form">
                <form>
                  <div>
                      <div className="text-center wt-5">
                          <img src={Logo} alt="" className="w-50 border-radius: 50%;" />
                      </div>
                      <label for="un" className="form-label my-4">Username</label>
                      <input type="text" className="form-control" id="un" placeholder="Username" />
                    </div>
                    <div>
                      <label for="pw" className="form-label my-4">Password</label>
                      <input type="password" className="form-control" id="pw" placeholder="Password" />
                    </div>
                  <div className=" my-4">
                    <button type="submit" className="btn btn-primary w-100">Sign in</button>
                  </div>
                </form>
            </div>
          </section>
        </div>
      </div>
    )
}