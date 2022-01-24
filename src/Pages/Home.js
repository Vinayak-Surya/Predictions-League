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
            <div className="carousel-item" data-bs-interval="18000">
              <video className="img-fluid d-block" autoplay="autoplay" loop muted>
                <source src={Video2} id="vid2" type="video/mp4" />
              </video>
            </div>
            {/* <div className="carousel-item" data-bs-interval="13000">
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
      <div className="main my-4">
        <div>
          <h1 className="text-center display-3">About</h1>
          <hr className="w-50 mx-auto" />
        </div>
        <div className="container">
          <div className="row">
            <div className="column-lg-6 col-md-6 col-12 mb-2">
              <div id="carouselExampleCaptions1" className="carousel slide carousel-fade" data-bs-ride="carousel">
                {/* <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div> */}
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="10000">
                    <img src={RealMadrid} className="d-block" alt="..." />
                    {/* <div className="carousel-caption d-md-block">
                  <p>Real Madrid</p>
                </div> */}
                  </div>
                  <div className="carousel-item" data-bs-interval="10000">
                    <img src={Barca} className="d-block" alt="..." />
                    {/* <div className="carousel-caption d-md-block">
                  <p>Barcelona</p>
                </div>  */}
                  </div>
                  <div className="carousel-item" data-bs-interval="10000">
                    <img src={Atletico} className="d-block" alt="..." />
                    {/* <div className="carousel-caption">
                  <p>Atletico Madrid</p>
                </div> */}
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="column-lg-6 col-md-6 col-12 d-flex justify-content-center align-items-center">
              <h4>Predicitions League is a live  virtual gaming platform based on the Campeonato Nacional de Liga de Primera División of Spain, commonly known as the La Liga.
                Participants predicts the results of actual games being played in the LaLiga and in return get points based on the accuracy of their predictions.
                Users can compare their scores with players from accross the globe and get to know their global standings or wish to form leagues where they can compete among themselves.</h4>
            </div>
          </div>
        </div>
      </div>
      <footer className="mt-5">
        <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
       Copyright &copy; KSV
          
        </div>
      </footer>
    </div>
  )
}