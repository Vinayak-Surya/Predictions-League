import react from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/lal.png";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"> <img src={Logo} alt="" width="100" className="d-inline-block align-text-top" /> </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-md-flex justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item mr-3">
                    {/* <a className="nav-link active" aria-current="page" href="rules.html">Rules</a> */}
                    <Link className="text-light" to="/predictions">Predictions</Link>
                    </li>
                    <li className="nav-item mr-3">
                    {/* <a className="nav-link active" aria-current="page" href="rules.html">Rules</a> */}
                    <Link className="text-light" to="/profile">Profile</Link>
                    </li>
                    <li className="nav-item mr-3">
                    {/* <a className="nav-link active" aria-current="page" href="rules.html">Rules</a> */}
                    <Link className="text-light" to="/rules">Rules</Link>
                    </li>
                    <li className="nav-item">
                    {/* <a className="nav-link" href="login.html">Login</a> */}
                    <Link className="text-light" to="/login">Login</Link>
                    </li>
                    </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}