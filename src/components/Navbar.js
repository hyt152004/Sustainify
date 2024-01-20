import React from "react";
import {Link} from "react-router-dom"
import logo from '../images/logo.png'

function Navbar() {
    return (
        <nav className="nav">
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
    )
}

export default Navbar;