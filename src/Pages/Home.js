import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import RealMadrid from "../Images/f.jpg";
import Barca from "../Images/s.jpeg";
import Atletico from "../Images/ts.jpg";
import Navbar from "../Components/Navbar";
import Video from "../Images/Video.mp4";
import Video2 from "../Images/Soccer-intro.mp4"
export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button> */}
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="13000">
              <video className="img-fluid d-block" autoplay="autoplay" loop muted>
                <source src={Video} type="video/mp4" />
              </video>
            </div>
            <div className="carousel-item" data-bs-interval="13000">
              <video className="img-fluid d-block" autoplay="autoplay" loop muted>
                <source src={Video2} type="video/mp4" />
              </video>
              {/* </div>
            <div className="carousel-item" data-bs-interval="13000">
              <img src={RealMadrid} className="d-block" alt="..." />
              <div className="carousel-caption d-md-block">
                <h3>Real Madrid</h3>
                <h4>Real Madrid winning LaLiga</h4>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="13000">
              <img src={Barca} className="d-block" alt="..." />
              <div className="carousel-caption d-md-block">
                <h3>Barcelona</h3>
                <h4>Barcelona winning LaLiga</h4>
              </div>
            </div> */}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <footer>
          <div className="main my-4">
            <div>
              <h1 className="text-center display-3">About</h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="text-center">
            <p>Copyright &copy; KSV</p>
          </div>
        </footer>
      </div>
      )
}