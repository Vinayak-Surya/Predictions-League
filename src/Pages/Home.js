import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import RealMadrid from "../Images/f.jpg";
import Barca from "../Images/s.jpeg";
import Atletico from "../Images/ts.jpg";
import Navbar from "../Components/Navbar";

export default function Home() {
    return (
      <div>
        <Navbar />
        <div>
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner" data-bs-interval="5000">
              <div className="carousel-item active">
                <img src={RealMadrid} className="d-block" alt="..." />
                <div className="carousel-caption d-md-block">
                  <h3>Real Madrid</h3>
                  <h4>Real Madrid winning LaLiga</h4>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="5000">
                <img src={Barca} className="d-block" alt="..." />
                <div className="carousel-caption d-md-block">
                  <h3>Barcelona</h3>
                  <h4>Barcelona winning LaLiga</h4>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="5000">
                <img src={Atletico} className="d-block" alt="..." />
                <div className="carousel-caption d-md-block">
                  <h4>Atletico Madrid</h4>
                  <h3>Atletico Madrid winning LaLiga</h3>
                </div>
              </div>
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
                  <hr className="w-25 mx-auto"/>
              </div>
          </div>
            <div className="text-center">
                <p>Copyright &copy; 2022 My Website</p>
            </div>
        </footer>
      </div>
    )
}