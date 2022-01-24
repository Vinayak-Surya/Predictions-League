import react, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Images/lal.png";

export default function Navbar() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if(sessionStorage.getItem("userName")) {
            setIsLoggedIn(true);
        }
    }, [])

    const handleLogout = () => {
        sessionStorage.removeItem("userName");
        setIsLoggedIn(false);
        navigate("/login");
    }

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
                            {isLoggedIn ? 
                            <div class="d-flex">
                                <li className="nav-item active mr-3">
                                    <Link style={{ textDecoration: 'none' }} className="text-light nav-link" to="/predictions">Predictions</Link>
                                </li>
                                <li className="nav-item mr-3">
                                    <Link style={{ textDecoration: 'none' }} className="text-light nav-link" to="/profile">Profile</Link>
                                </li>
                                <li className="nav-item mr-3">
                                    <Link style={{ textDecoration: 'none' }} className="text-light nav-link" to="/rules">Rules</Link>
                                </li>
                                <li className="nav-item mr-3">
                                    <Link style={{ textDecoration: 'none' }} className="text-light nav-link" to="/leaderboard">Leaderboard</Link>
                                </li>
                                <li className="nav-item mr-3">
                                    <Link style={{ textDecoration: 'none' }} className="text-light nav-link" to="/gameweektotal">Gameweek Total</Link>
                                </li>
                                <li className="nav-item" onClick={handleLogout}>
                                    <div className="text-light nav-link">Logout</div>
                                </li>
                            </div>
                             : 
                            <div class="d-flex">
                                <li className="nav-item mr-3">
                                    <Link style={{ textDecoration: 'none' }} className="text-light nav-link" to="/rules">Rules</Link>
                                </li>
                                <li className="nav-item">
                                    <Link style={{ textDecoration: 'none' }} className="text-light nav-link" to="/login">Login</Link>
                                </li>
                            </div>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}