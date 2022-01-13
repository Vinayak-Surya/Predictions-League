import React from "react";

export default function Login() {
    return (
        <div>
            <head>
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
    <link rel="stylesheet" type="text/css" href="style.css" />
    <link rel = "icon" href = "../Images/logo.png" type = "image/x-icon" />
    <title>Login</title>
  </head>
  <body style="background-image: url('../images/pre.jpg'); background-repeat: no-repeat; background-size: cover;">
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
                    <a class="nav-link" href="rules.html">Rules</a>
                  </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="home.html">Home</a>
              </li>
              </ul>
            </div>
        </div>
      </nav>
      <section class="mt-5 pt-5 mx-auto text-light">
        <div class="container ms-auto" id="form">
        <form>
            <div>
                <div class="text-center wt-5">
                    <img src="images/logo.png" alt="" class="w-50 border-radius: 50%;" />
                  </div>
                <label for="un" class="form-label my-4">Username</label>
                <input type="text" class="form-control" id="un" placeholder="Username" />
              </div>
              <div>
                <label for="pw" class="form-label my-4">Password</label>
                <input type="password" class="form-control" id="pw" placeholder="Password" />
              </div>
            <div class=" my-4">
              <button type="submit" class="btn btn-primary w-100">Sign in</button>
            </div>
          </form>
        </div>
      </section>
    </body>
        </div>
    )
}