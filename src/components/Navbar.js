
import React from "react";
import {Link} from "react-router-dom"
import logo from '../images/logo.png'
import './navbar.css'; 
function Navbar() {
    return (
        <nav className="nav">
<<<<<<< HEAD
            <Link to="/home" className="site-title"><img src={logo} alt="logo" className="profile" /></Link>
            <ul>
                <li>
                    <Link to= "/home">home</Link>
                </li>
                <li>
                    <Link to= "/about">about</Link>
                </li>
                <li>
                    <Link to= "/register">login</Link>
                </li>
            </ul>
        </nav>
    )
=======
        <Link to="/home" className="site-title"><img src={logo} alt="logo" className="profile" /></Link>
        <ul>
            <li>
                <Link to= "/home">home</Link>
            </li>
            <li>
                <Link to= "/about">about</Link>
            </li>
        </ul>
    </nav>
    );
>>>>>>> 5dbe198a446799d1cf51a0f6745ef05da7ee1907
}
export default Navbar;
