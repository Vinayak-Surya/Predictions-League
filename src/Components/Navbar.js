import react from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/lal.png";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="https://www.laliga.com/en-GB" target="_blank"> <img src={Logo} alt="" width="100" className="d-inline-block align-text-top" /> </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    {/* <a className="nav-link active" aria-current="page" href="rules.html">Rules</a> */}
                    <Link to="/rules">Rules</Link>
                    </li>
                    <li className="nav-item">
                    {/* <a className="nav-link" href="login.html">Login</a> */}
                    <Link to="/login">Login</Link>
                    </li>
                    </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}