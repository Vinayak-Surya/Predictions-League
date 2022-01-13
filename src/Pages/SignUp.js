import React from "react";
import Navbar from "../Components/Navbar";
import Logo from "../Images/logo.png";
import BG from "../Images/pre.jpg";

export default function Login() {
    return (
      <div style={{backgroundImage: `url(${BG})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100vh"}}>
        <div style={{backdropFilter: "blur(3px)", height: "100vh"}}>
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
                      <input type="text" className="form-control" id="name" placeholder="Name" />
                    </div>
                    <div>
                      <label for="email" className="form-label">Email</label>
                      <input type="text" className="form-control" id="email" placeholder="Password" />
                    </div>
                    <div>
                      <label for="ft" className="form-label">Favourite Team</label>
                      <input type="text" className="form-control" id="ft" placeholder="Password" />
                    </div>
                      <label for="un" className="form-label">Username</label>
                      <input type="text" className="form-control" id="un" placeholder="Username" />
                    </div>
                    <div>
                      <label for="pw" className="form-label">Password</label>
                      <input type="password" className="form-control" id="pw" placeholder="Password" />
                    </div>
                  <div className=" my-4">
                    <button type="submit" className="btn btn-primary w-100">Sign up</button>
                  </div>
                </form>
            </div>
          </section>
        </div>
      </div>
    )
}