import React from "react";
import "./style.css";

export default function Home() {
    return (
        <div>
            {/* <head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
    <link rel = "icon" href = "../Images/logo.png" type = "image/x-icon" />
    <link rel="stylesheet" type="text/css" href="style.css" />
    <title>Home</title>
  </head> */}
  <div>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="https://www.laliga.com/en-GB" target="_blank"> <img src="../Images/lal.png" alt="" width="100" class="d-inline-block align-text-top" /> </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="rules.html">Rules</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="login.html">Login</a>
              </li>
              </ul>
          </div>
        </div>
      </nav>
    <header>
        <div id="carouselExampleCaptions" class="carousel slide " data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner" data-bs-interval="5000">
              <div class="carousel-item active">
                <img src="../Images/f.jpg" class="d-block" alt="..." />
                <div class="carousel-caption d-md-block">
                  <h3>Real Madrid</h3>
                  <h4>Real Madrid winning LaLiga</h4>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="5000">
                <img src="../Images/s.jpeg" class="d-block" alt="..." />
                <div class="carousel-caption d-md-block">
                  <h3>Barcelona</h3>
                  <h4>Barcelona winning LaLiga</h4>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="5000">
                <img src="../Images/ts.jpg" class="d-block" alt="..." />
                <div class="carousel-caption d-md-block">
                  <h4>Atletico Madrid</h4>
                  <h3>Atletico Madrid winning LaLiga</h3>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
    </header>
    <footer>
        <div class="main my-4">
            <div>
                <h1 class="text-center display-3">About</h1>
                <hr class="w-25 mx-auto"/>

            </div>
        </div>
          <div class="text-center">
              <p>Copyright &copy 2022 My Website</p>
          </div>
      </footer>
  </div>
        </div>
    )
}