import React from "react";
import Navbar from "../Components/Navbar";
import BG from "../Images/pre.jpg";

export default function Profile() {
    return (
      <div>
        <div style={{backgroundImage: `url(${BG})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100vh"}}>
          <div style={{backdropFilter: "blur(3px)", height: "100vh"}}>
            <Navbar />
          </div>
        </div>
      </div>
    )
}