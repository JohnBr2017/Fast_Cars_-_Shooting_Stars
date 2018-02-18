import React from "react";
import { Link } from "react-router-dom";

import './Nav.css';

function Navbar(props) {
    return (
        <div >
            <Link to="/">SignUpIn</Link>
            <Link to="/Home" >Home</Link>
            <Link to="/Race" >Race</Link>
            <Link to="/About" >About</Link>
            <Link to="/Contact">Contact</Link>
        </div>
    )
}

export default Navbar;