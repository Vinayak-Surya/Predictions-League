import React from "react";
import Navbar from "../Components/Navbar";
import BG from "../Images/pre.jpg";

export default function Rules() {
    return (
        <div style={{backgroundImage: `url(${BG})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100vh"}}>
            <div style={{backdropFilter: "blur(3px)", height: "100vh"}}>
                <Navbar />
                <section className="text-light">
                    <div className="main my-4">
                        <div>
                            <h1 className="text-center display-3">Rules</h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}