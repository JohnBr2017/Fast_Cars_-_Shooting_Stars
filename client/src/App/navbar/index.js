import React from "react";
import { Link } from "react-router-dom";

import './Nav.css';

function Navbar(props) {
    return (
        <div className="outer">
            <div className="navDiv">
                <Link to="/Home" >Home</Link>
                <Link to="/Game" >Race</Link>
                <Link to="/About">About</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/">Login</Link>
            </div>
        </div>
    )
}

export default Navbar;